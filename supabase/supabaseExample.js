import { createClient } from '@supabase/supabase-js'
import 'react-native-url-polyfill/auto'



const supabaseUrl = 'address' //put your on instead of address
const supabaseKey = 'Key' //put your on instead of key
export const supabase = createClient(supabaseUrl, supabaseKey)