'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { type ReactNode, useMemo } from 'react';

type Props = {
  children: ReactNode;
};

const AppQueryClientProvider = ({ children }: Props) => {
  const client = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
          },
        },
      }),
    [],
  );

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export { AppQueryClientProvider };
