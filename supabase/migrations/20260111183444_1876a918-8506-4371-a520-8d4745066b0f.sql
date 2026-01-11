-- Add restrictive DELETE policy to prevent direct deletion
CREATE POLICY "No direct delete access" 
ON public.user_progress 
AS RESTRICTIVE
FOR DELETE
USING (false);