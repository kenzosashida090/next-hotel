import { createClient } from "@supabase/supabase-js";


const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY) // create a client instance


export default supabase

