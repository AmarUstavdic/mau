import { supabase } from "$lib/supabase";

export async function load() {
  const { data } = await supabase.from("countries").select();
  return {
    countries: data ?? [],
  };
}

// make requests to supabase here
          

