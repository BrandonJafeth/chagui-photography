import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.PUBLIC_SUPABASE_URL as string | undefined
const key = import.meta.env.PUBLIC_SUPABASE_ANON_KEY as string | undefined

// null when env vars not set — db.ts falls back to local data files
export const supabase = url && key ? createClient(url, key) : null
