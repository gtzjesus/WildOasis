import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://eupdtrsnsinjmwwdgeuj.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1cGR0cnNuc2luam13d2RnZXVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM4NjMwMjAsImV4cCI6MjAwOTQzOTAyMH0.tC_CIcQeXABotKVY77ueDJgmnnbTtQrwIDDO2ER5Mq8';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
