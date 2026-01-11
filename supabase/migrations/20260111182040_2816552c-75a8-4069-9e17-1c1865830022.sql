-- Drop existing permissive policies
DROP POLICY IF EXISTS "Anyone can read their own progress by device_id" ON public.user_progress;
DROP POLICY IF EXISTS "Anyone can insert progress" ON public.user_progress;
DROP POLICY IF EXISTS "Anyone can update their own progress by device_id" ON public.user_progress;

-- Create restrictive RLS policies that deny all direct table access
-- Users will access data through RPC functions only
CREATE POLICY "No direct read access"
ON public.user_progress FOR SELECT
USING (false);

CREATE POLICY "No direct insert access"
ON public.user_progress FOR INSERT
WITH CHECK (false);

CREATE POLICY "No direct update access"
ON public.user_progress FOR UPDATE
USING (false);

-- Create secure RPC function to get user progress by device_id
CREATE OR REPLACE FUNCTION public.get_user_progress(p_device_id TEXT)
RETURNS TABLE (
  id UUID,
  device_id TEXT,
  stats JSONB,
  wrong_answers JSONB,
  last_synced_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Validate device_id format (must start with 'device_' and be a valid UUID pattern)
  IF p_device_id IS NULL OR p_device_id = '' OR 
     NOT (p_device_id ~ '^device_[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$') THEN
    RAISE EXCEPTION 'Invalid device_id format';
  END IF;
  
  RETURN QUERY
  SELECT up.id, up.device_id, up.stats, up.wrong_answers, up.last_synced_at, up.created_at, up.updated_at
  FROM public.user_progress up
  WHERE up.device_id = p_device_id;
END;
$$;

-- Create secure RPC function to upsert user progress
CREATE OR REPLACE FUNCTION public.upsert_user_progress(
  p_device_id TEXT,
  p_stats JSONB DEFAULT '{}'::JSONB,
  p_wrong_answers JSONB DEFAULT '[]'::JSONB
)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  existing_id UUID;
BEGIN
  -- Validate device_id format
  IF p_device_id IS NULL OR p_device_id = '' OR 
     NOT (p_device_id ~ '^device_[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$') THEN
    RAISE EXCEPTION 'Invalid device_id format';
  END IF;
  
  -- Check if record exists
  SELECT id INTO existing_id
  FROM public.user_progress
  WHERE device_id = p_device_id;
  
  IF existing_id IS NOT NULL THEN
    -- Update existing record
    UPDATE public.user_progress
    SET 
      stats = p_stats,
      wrong_answers = p_wrong_answers,
      last_synced_at = NOW(),
      updated_at = NOW()
    WHERE device_id = p_device_id;
  ELSE
    -- Insert new record
    INSERT INTO public.user_progress (device_id, stats, wrong_answers, last_synced_at)
    VALUES (p_device_id, p_stats, p_wrong_answers, NOW());
  END IF;
  
  RETURN TRUE;
EXCEPTION
  WHEN OTHERS THEN
    RETURN FALSE;
END;
$$;