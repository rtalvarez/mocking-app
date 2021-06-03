import { useQuery } from 'react-query';

import { useHttp } from './useHttp';

export function useLogin() {
  const http = useHttp();

  return useQuery('login', () =>
    http.get<{ authenticated: boolean }>('/api/login').then(({ body }) => body.authenticated),
  );
}
