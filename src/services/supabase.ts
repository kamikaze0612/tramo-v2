import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://nhuujfrrbvxccafolusl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5odXVqZnJyYnZ4Y2NhZm9sdXNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgxNTM2OTAsImV4cCI6MjAxMzcyOTY5MH0.fFd1IvpgZg9VaojCetm6WBl5AYL8yF3tCIlVzzQekMg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
