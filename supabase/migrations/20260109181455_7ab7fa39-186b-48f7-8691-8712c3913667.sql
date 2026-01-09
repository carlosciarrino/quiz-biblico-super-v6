-- Create user_progress table for syncing offline progress
CREATE TABLE public.user_progress (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  device_id TEXT NOT NULL UNIQUE,
  stats JSONB NOT NULL DEFAULT '{}',
  wrong_answers JSONB NOT NULL DEFAULT '[]',
  last_synced_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;

-- Create policy for public access (device-based identification without auth)
CREATE POLICY "Anyone can read their own progress by device_id" 
ON public.user_progress 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can insert progress" 
ON public.user_progress 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can update their own progress by device_id" 
ON public.user_progress 
FOR UPDATE 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_user_progress_updated_at
BEFORE UPDATE ON public.user_progress
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for faster lookups by device_id
CREATE INDEX idx_user_progress_device_id ON public.user_progress(device_id);