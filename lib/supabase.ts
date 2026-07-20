// Cliente de Supabase, listo para cuando quieras conectar el
// formulario de contacto, un blog, o cualquier otra función.
// No se usa todavía en ningún componente.
//
// Para activarlo:
// 1. Crea un proyecto en https://supabase.com
// 2. Copia .env.local.example a .env.local y llena las dos variables
// 3. Importa `supabase` desde "@/lib/supabase" donde lo necesites

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
