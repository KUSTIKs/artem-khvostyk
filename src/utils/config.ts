import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string(),
  NEXT_PUBLIC_SANITY_PROJECT_ID: z.string(),
  NEXT_PUBLIC_SANITY_DATASET: z.string(),
  NEXT_PUBLIC_SANITY_API_VERSION: z.string(),
});

const env = envSchema.parse({
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
  NEXT_PUBLIC_SANITY_API_VERSION: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
});

const envConfig = {
  supabaseUrl: env.NEXT_PUBLIC_SUPABASE_URL,
  supabaseAnonKey: env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  sanityProjectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  sanityDataset: env.NEXT_PUBLIC_SANITY_DATASET,
  sanityApiVersion: env.NEXT_PUBLIC_SANITY_API_VERSION,
};

export { envConfig };
