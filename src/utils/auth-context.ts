'use client';

import type { SignInWithOAuthCredentials, User } from '@supabase/supabase-js';
import { createContext } from 'react';

import type { Tables } from '#src/types/database';

type UserContextState =
  | {
      user: User;
      publicUser: Tables<'users'>;
      isAuthenticated: true;
      isLoaded: true;
      remainingDays: number;
    }
  | {
      user: null;
      publicUser: null;
      isAuthenticated: false;
      isLoaded: boolean;
      remainingDays: null;
    };

type AuthContextState = (
  | {
      isAuthenticated: true;
      isLoaded: true;
    }
  | {
      isAuthenticated: false;
      isLoaded: boolean;
    }
) & {
  signIn: (options?: SignInWithOAuthCredentials['options']) => Promise<void>;
  signOut: () => Promise<void>;
};

const UserContext = createContext<UserContextState>({
  user: null,
  publicUser: null,
  isAuthenticated: false,
  isLoaded: false,
  remainingDays: null,
});

const AuthContext = createContext<AuthContextState>({
  isAuthenticated: false,
  isLoaded: false,
  signIn: async () => {},
  signOut: async () => {},
});

export { AuthContext, UserContext };
export type { UserContextState, AuthContextState };
