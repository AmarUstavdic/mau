import { createClient } from '@supabase/supabase-js'

import {
  PUBLIC_SUPABASE_URL,
  PUBLIC_SUPABASE_ANON_API
} from '$env/static/public';

// console.log(PUBLIC_SUPABASE_URL)
// console.log(PUBLIC_SUPABASE_ANON_API)


export const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_API)

// to use supabase client make requests through +page.seerver.ts