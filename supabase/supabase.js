import { createClient } from '@supabase/supabase-js'
import 'react-native-url-polyfill/auto'



const supabaseUrl = 'https://ppihnndftvaibkwoaich.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBwaWhubmRmdHZhaWJrd29haWNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIzODc3NTAsImV4cCI6MTk5Nzk2Mzc1MH0.LrNb83wYWGTqg-FtZ6qTAeDZfXBq8sSnYCRluEgilk4'
export const supabase = createClient(supabaseUrl, supabaseKey)