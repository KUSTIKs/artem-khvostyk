import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string(),
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string(),
  CLERK_SECRET_KEY: z.string(),
});

const env = envSchema.parse(process.env);

const envConfig = {
  SupabaseUrl: env.NEXT_PUBLIC_SUPABASE_URL,
  SupabaseAnonKey: env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  clerkPublishableKey: env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
  clerkSecretKey: env.CLERK_SECRET_KEY,
};

export { envConfig };
