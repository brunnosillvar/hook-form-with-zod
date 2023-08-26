import { createClient} from '@supabase/supabase-js'

export const supabase = createClient(
  'https://grgvwcxbxghsyacqmplw.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdyZ3Z3Y3hieGdoc3lhY3FtcGx3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MzA3NTEyNiwiZXhwIjoyMDA4NjUxMTI2fQ.feKLE174XxnS8a3xoEefZpIMdDRKtr9GvjhgFn6e_uY'
)