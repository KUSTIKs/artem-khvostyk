import type { ReactNode } from 'react';

import { AppQueryClientProvider } from './query-client-provider';
import { AppSkeletonThemeProvider } from './skeleton-theme-provider';

type Props = {
  children: ReactNode;
};

const AppProviders = ({ children }: Props) => {
  return (
    <AppQueryClientProvider>
      <AppSkeletonThemeProvider>{children}</AppSkeletonThemeProvider>
    </AppQueryClientProvider>
  );
};

export { AppProviders };
