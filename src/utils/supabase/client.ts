import { createBrowserClient } from '@supabase/ssr';

import { envConfig } from '../config';

const createClient = () => {
  return createBrowserClient(envConfig.SupabaseUrl, envConfig.SupabaseAnonKey);
};

export { createClient };
