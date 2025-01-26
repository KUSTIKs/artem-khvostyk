'use client';

import type {
  Session,
  SignInWithOAuthCredentials,
  User,
} from '@supabase/supabase-js';
import { type ReactNode, useEffect, useMemo, useState } from 'react';

import {
  AuthContext,
  type AuthContextState,
  UserContext,
  type UserContextState,
} from '#src/utils/auth-context';
import { createClient } from '#src/utils/supabase/client';
import type { Tables } from '#src/utils/supabase/database.types';

type Props = {
  children: ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [publicUser, setPublicUser] = useState<Tables<'users'> | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const supabase = useMemo(() => createClient(), []);

  const signIn = async (options?: SignInWithOAuthCredentials['options']) => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options,
    });
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setIsLoaded(false);
      setSession(data.session);
      setUser(data.session?.user ?? null);

      if (data.session?.user) {
        supabase
          .from('users')
          .select('*')
          .eq('id', data.session?.user.id)
          .single()
          .then(({ data }) => setPublicUser(data))
          .then(() => setIsLoaded(true));
      } else {
        setIsLoaded(true);
      }
    });

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setIsLoaded(false);
        setSession(session);
        setUser(session?.user ?? null);

        if (session?.user) {
          supabase
            .from('users')
            .select('*')
            .eq('id', session.user.id)
            .single()
            .then(({ data }) => setPublicUser(data))
            .then(() => setIsLoaded(true));
        } else {
          setPublicUser(null);
          setIsLoaded(true);
        }
      },
    );

    return () => authListener.subscription.unsubscribe();
  }, [supabase]);

  if (session && user && publicUser && isLoaded) {
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
