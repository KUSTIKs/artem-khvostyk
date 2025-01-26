import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string(),
});

const env = envSchema.parse({
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
});

const envConfig = {
  SupabaseUrl: env.NEXT_PUBLIC_SUPABASE_URL,
  SupabaseAnonKey: env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
};

export { envConfig };
