'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { type ReactNode, useMemo } from 'react';

type Props = {
  children: ReactNode;
};

const AppQueryClientProvider = ({ children }: Props) => {
  const client = useMemo(() => new QueryClient(), []);

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export { AppQueryClientProvider };
