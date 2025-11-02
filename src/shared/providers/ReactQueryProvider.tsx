'use client';

import { ReactNode, useState } from 'react';
import {
  QueryClient,
  QueryClientProvider,
  HydrationBoundary,
  DehydratedState,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

type Props = { children: ReactNode; state?: DehydratedState };

export default function ReactQueryProvider({ children, state }: Props) {
  const [client] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 30_000,
            gcTime: 5 * 60_000,
            refetchOnWindowFocus: false,
            retry: 1,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={client}>
      <HydrationBoundary state={state}>{children}</HydrationBoundary>
      {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}