'use client';

import { Slot } from '@radix-ui/react-slot';
import type { SignInWithOAuthCredentials } from '@supabase/supabase-js';
import type { ReactNode } from 'react';

import { useAuth } from '#src/hooks/auth';

const SignedIn = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated, isLoaded } = useAuth();

  return isLoaded && isAuthenticated && children;
};

const SignedOut = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated, isLoaded } = useAuth();

  return isLoaded && !isAuthenticated && children;
};

const AuthLoading = ({ children }: { children: ReactNode }) => {
  const { isLoaded } = useAuth();

  return !isLoaded && children;
};

const SignInButton = ({
  children,
  ...options
}: { children: ReactNode } & SignInWithOAuthCredentials['options']) => {
  const { signIn } = useAuth();

  return <Slot onClick={() => signIn(options)}>{children}</Slot>;
};

const SignOutButton = ({ children }: { children: ReactNode }) => {
  const { signOut } = useAuth();

  return <Slot onClick={signOut}>{children}</Slot>;
};

export { SignedIn, SignedOut, AuthLoading, SignInButton, SignOutButton };
