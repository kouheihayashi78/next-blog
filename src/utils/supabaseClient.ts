
import { createClient } from '@supabase/supabase-js'

const SUPABASEURL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASEANONKEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(SUPABASEURL, SUPABASEANONKEY, {
    auth: {
        persistSession: false
    }
});