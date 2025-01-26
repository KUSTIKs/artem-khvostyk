import type { SignInWithOAuthCredentials } from '@supabase/supabase-js';

import { createClient } from '#src/utils/supabase/client';

const signIn = async (options?: SignInWithOAuthCredentials['options']) => {
  const supabase = createClient();
  await supabase.auth.signInWithOAuth({
    provider: 'github',
    options,
  });
};

const signOut = async () => {
  const supabase = createClient();
  await supabase.auth.signOut();
};

export { signIn, signOut };
