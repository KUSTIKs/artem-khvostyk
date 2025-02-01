import { createBrowserClient } from '@supabase/ssr';

import type { Database } from '#src/types/database';
import { envConfig } from '../config';

const createClient = () => {
  return createBrowserClient<Database>(
    envConfig.supabaseUrl,
    envConfig.supabaseAnonKey,
  );
};

export { createClient };
