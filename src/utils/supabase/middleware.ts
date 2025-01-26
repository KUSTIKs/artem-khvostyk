import { createServerClient } from '@supabase/ssr';
import { type NextRequest, NextResponse } from 'next/server';

import { envConfig } from '../config';

const updateSession = (request: NextRequest) => {
  // Create an unmodified response
  let supabaseResponse = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  createServerClient(envConfig.SupabaseUrl, envConfig.SupabaseAnonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        for (const { options: _options, ...cookie } of cookiesToSet) {
          request.cookies.set(cookie);
        }

        supabaseResponse = NextResponse.next({ request });

        for (const cookie of cookiesToSet) {
          supabaseResponse.cookies.set(cookie);
        }
      },
    },
  });

  return supabaseResponse;
};

export { updateSession };
