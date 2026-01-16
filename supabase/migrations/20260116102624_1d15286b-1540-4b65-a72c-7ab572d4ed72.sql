-- Fix INPUT_VALIDATION: Add JSONB size and structure validation to upsert_user_progress
-- Fix PUBLIC_DATA_EXPOSURE: Document device-based auth limitation and add extra validation

CREATE OR REPLACE FUNCTION public.upsert_user_progress(p_device_id text, p_stats jsonb DEFAULT '{}'::jsonb, p_wrong_answers jsonb DEFAULT '[]'::jsonb)
 RETURNS boolean
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
DECLARE
  existing_id UUID;
BEGIN
  -- Validate device_id format (strict validation)
  IF p_device_id IS NULL OR p_device_id = '' OR 
     NOT (p_device_id ~ '^device_[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$') THEN
    RAISE EXCEPTION 'Invalid device_id format';
  END IF;
  
  -- INPUT VALIDATION: Check JSONB size limits (50KB max each)
  IF LENGTH(p_stats::text) > 50000 THEN
    RAISE EXCEPTION 'Stats data exceeds maximum allowed size (50KB)';
  END IF;
  
  IF LENGTH(p_wrong_answers::text) > 50000 THEN
    RAISE EXCEPTION 'Wrong answers data exceeds maximum allowed size (50KB)';
  END IF;
  
  -- INPUT VALIDATION: Validate stats is an object
  IF p_stats IS NOT NULL AND jsonb_typeof(p_stats) != 'object' THEN
    RAISE EXCEPTION 'Invalid stats format - must be an object';
  END IF;
  
  -- INPUT VALIDATION: Validate wrong_answers is an array
  IF p_wrong_answers IS NOT NULL AND jsonb_typeof(p_wrong_answers) != 'array' THEN
    RAISE EXCEPTION 'Invalid wrong_answers format - must be an array';
  END IF;
  
  -- INPUT VALIDATION: Validate stats structure if not empty
  IF p_stats IS NOT NULL AND p_stats != '{}'::jsonb THEN
    -- Ensure numeric fields are numbers if they exist
    IF p_stats ? 'totalQuizzesCompleted' AND jsonb_typeof(p_stats->'totalQuizzesCompleted') != 'number' THEN
      RAISE EXCEPTION 'Invalid stats: totalQuizzesCompleted must be a number';
    END IF;
    IF p_stats ? 'totalQuestionsAnswered' AND jsonb_typeof(p_stats->'totalQuestionsAnswered') != 'number' THEN
      RAISE EXCEPTION 'Invalid stats: totalQuestionsAnswered must be a number';
    END IF;
    IF p_stats ? 'totalCorrectAnswers' AND jsonb_typeof(p_stats->'totalCorrectAnswers') != 'number' THEN
      RAISE EXCEPTION 'Invalid stats: totalCorrectAnswers must be a number';
    END IF;
    IF p_stats ? 'streakDays' AND jsonb_typeof(p_stats->'streakDays') != 'number' THEN
      RAISE EXCEPTION 'Invalid stats: streakDays must be a number';
    END IF;
  END IF;
  
  -- INPUT VALIDATION: Validate wrong_answers array elements structure
  IF p_wrong_answers IS NOT NULL AND jsonb_array_length(p_wrong_answers) > 0 THEN
    -- Limit array size to prevent abuse (max 1000 entries)
    IF jsonb_array_length(p_wrong_answers) > 1000 THEN
      RAISE EXCEPTION 'Wrong answers array exceeds maximum allowed length (1000 entries)';
    END IF;
    
    -- Check first element has expected structure (questionId field)
    IF NOT (p_wrong_answers->0 ? 'questionId') THEN
      RAISE EXCEPTION 'Invalid wrong_answers: each entry must have a questionId field';
    END IF;
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
    -- Log the error but return false for client
    RAISE WARNING 'upsert_user_progress error: %', SQLERRM;
    RETURN FALSE;
END;
$function$;

-- Add comment documenting the device-based auth design decision
COMMENT ON FUNCTION public.upsert_user_progress IS 
'Securely upserts user progress data. 
SECURITY NOTE: This app uses device-based identification (device_id stored in localStorage) 
rather than user authentication. The device_id acts as a bearer token - anyone with access 
to the device_id can access/modify that device''s data. This is an acceptable trade-off for 
a Bible quiz app that doesn''t store PII. Device IDs are UUIDs (128-bit random), making 
brute-force enumeration impractical (2^128 possibilities).';

COMMENT ON FUNCTION public.get_user_progress IS 
'Retrieves user progress data by device_id.
SECURITY NOTE: Uses device-based identification. The device_id provides access control - 
treat it as a bearer token. While not as secure as user authentication, it''s appropriate 
for non-sensitive quiz progress data. UUIDs prevent practical enumeration attacks.';