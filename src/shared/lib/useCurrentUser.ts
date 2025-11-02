"use client";

import { useQuery, useQueryClient } from '@tanstack/react-query';
import { api } from './api';

export function useCurrentUser() {
  return useQuery({
    queryKey: ['me'],
    queryFn: async () => {
      const { data } = await api.get('/auth/me');
      return data as { id: number; email: string; name: string };
    },
    staleTime: 60 * 1000,
  });
}

export function useAuthHelpers() {
  const qc = useQueryClient();
  return {
    afterLogin: () => qc.invalidateQueries({ queryKey: ['me'] }),
    logout: async () => {
      await api.post('/auth/logout');
      qc.removeQueries({ queryKey: ['me'] });
    },
  };
}