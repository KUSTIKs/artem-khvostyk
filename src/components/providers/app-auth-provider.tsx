'use server';

import type { ReactNode } from 'react';

import { cookies } from 'next/headers';
import { createClient } from '#src/utils/supabase/server';
import { AuthProvider } from '../auth/auth-provider';

type Props = {
  children: ReactNode;
};

const AppAuthProvider = async ({ children }: Props) => {
  const cookie = await cookies();
  const supabase = createClient(cookie);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const publicUser =
    user &&
    (await supabase
      .from('users')
      .select('*')
      .eq('id', user.id)
      .single()
      .then(({ data }) => data));

  return (
    <AuthProvider initialUser={user} initialPublicUser={publicUser}>
      {children}
    </AuthProvider>
  );
};

export { AppAuthProvider };
