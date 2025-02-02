'use client';

import type { User } from '@supabase/supabase-js';
import { type ReactNode, useEffect, useMemo, useState } from 'react';

import { signIn, signOut } from '#src/services/auth';
import type { Tables } from '#src/types/database.ts';
import {
  AuthContext,
  type AuthContextState,
  UserContext,
  type UserContextState,
} from '#src/utils/auth-context';
import { createClient } from '#src/utils/supabase/client';

type Props = {
  children: ReactNode;
  initialUser: User | null;
  initialPublicUser: Tables<'users'> | null;
  initialRemainingDays: number | null;
};

const AuthProvider = ({
  children,
  initialUser,
  initialPublicUser,
  initialRemainingDays,
}: Props) => {
  const [user, setUser] = useState(initialUser);
  const [publicUser, setPublicUser] = useState(initialPublicUser);
  const [isLoaded, setIsLoaded] = useState(true);
  const [remainingDays, setRemainingDays] = useState(initialRemainingDays);

  const isAuthenticated =
    user && publicUser && isLoaded && remainingDays !== null;

  const supabase = useMemo(() => createClient(), []);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'INITIAL_SESSION') return;
      if (event === 'SIGNED_IN' && isAuthenticated) return;

      setIsLoaded(false);

      supabase.auth.getUser().then(({ data: { user } }) => {
        setUser(user);

        if (user) {
          Promise.all([
            supabase
              .from('users')
              .select('*')
              .eq('id', user.id)
              .single()
              .then(({ data }) => setPublicUser(data)),
            supabase
              .rpc('calculate_days_until_new_drawing', { user_id: user.id })
              .then(({ data }) => setRemainingDays(data)),
          ]).finally(() => setIsLoaded(true));
        } else {
          setPublicUser(null);
          setIsLoaded(true);
        }
      });
    });

    return () => authListener.subscription.unsubscribe();
  }, [supabase, isAuthenticated]);

  if (isAuthenticated) {
    const authContextState: AuthContextState = {
      isLoaded: true,
      isAuthenticated: true,
      signIn,
      signOut,
    };

    const userContextState: UserContextState = {
      isLoaded: true,
      isAuthenticated: true,
      user,
      publicUser,
      remainingDays,
    };

    return (
      <AuthContext.Provider value={authContextState}>
        <UserContext.Provider value={userContextState}>
          {children}
        </UserContext.Provider>
      </AuthContext.Provider>
    );
  }

  const authContextState: AuthContextState = {
    isLoaded,
    isAuthenticated: false,
    signIn,
    signOut,
  };

  const userContextState: UserContextState = {
    isLoaded,
    isAuthenticated: false,
    user: null,
    publicUser: null,
    remainingDays: null,
  };

  return (
    <AuthContext.Provider value={authContextState}>
      <UserContext.Provider value={userContextState}>
        {children}
      </UserContext.Provider>
    </AuthContext.Provider>
  );
};

export { AuthProvider };
