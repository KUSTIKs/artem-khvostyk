import { createServerClient } from '@supabase/ssr';
import type { cookies } from 'next/headers';

import type { Database } from '#src/types/database';
import { envConfig } from '../config';

const createClient = (cookieStore: Awaited<ReturnType<typeof cookies>>) => {
  return createServerClient<Database>(
    envConfig.supabaseUrl,
    envConfig.supabaseAnonKey,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            for (const cookie of cookiesToSet) {
              cookieStore.set(cookie);
            }
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    },
  );
};

export { createClient };
