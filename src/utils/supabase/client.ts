import { createBrowserClient } from '@supabase/ssr';

import { envConfig } from '../config';
import type { Database } from './database.types';

const createClient = () => {
  return createBrowserClient<Database>(
    envConfig.supabaseUrl,
    envConfig.supabaseAnonKey,
  );
};

export { createClient };
