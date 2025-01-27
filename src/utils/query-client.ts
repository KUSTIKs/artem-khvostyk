import { QueryClient } from '@tanstack/react-query';

const getQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });

export { getQueryClient };
