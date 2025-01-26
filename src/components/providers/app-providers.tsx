import type { ReactNode } from 'react';

import { AppAuthProvider } from './app-auth-provider';
import { AppQueryClientProvider } from './query-client-provider';
import { AppSkeletonThemeProvider } from './skeleton-theme-provider';

type Props = {
  children: ReactNode;
};

const AppProviders = ({ children }: Props) => {
  return (
    <AppAuthProvider>
      <AppQueryClientProvider>
        <AppSkeletonThemeProvider>{children}</AppSkeletonThemeProvider>
      </AppQueryClientProvider>
    </AppAuthProvider>
  );
};

export { AppProviders };
