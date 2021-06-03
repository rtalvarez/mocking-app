import { useMutation, useQueryClient } from 'react-query';

import { useHttp } from './useHttp';

export function useLoginDestroy() {
  const http = useHttp();
  const client = useQueryClient();

  return useMutation(
    'loginMutate',
    () =>
      http.delete<{ authenticated: boolean }>('/api/login').then(({ body }) => body.authenticated),
    {
      onSuccess: () => client.invalidateQueries('login'),
    },
  );
}
