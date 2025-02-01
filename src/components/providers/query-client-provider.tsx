'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { type ReactNode, useMemo } from 'react';

import { getQueryClient } from '#src/utils/query-client';

type Props = {
  children: ReactNode;
};

const AppQueryClientProvider = ({ children }: Props) => {
  const client = useMemo(getQueryClient, []);

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export { AppQueryClientProvider };
