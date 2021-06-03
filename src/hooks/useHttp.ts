import { createRequestSender, RequestOptions } from '@bigcommerce/request-sender';
import { useMemo } from 'react';

export const useHttp = () => {
  const http = useMemo(() => createRequestSender(), []);

  return useMemo(
    () => ({
      get<T>(url: string, options?: RequestOptions) {
        return http.get<T>(url, options);
      },

      post<T>(url: string, options?: RequestOptions) {
        return http.post<T>(url, options);
      },

      put<T>(url: string, options?: RequestOptions) {
        return http.put<T>(url, options);
      },

      patch<T>(url: string, options?: RequestOptions) {
        return http.patch<T>(url, options);
      },

      delete<T>(url: string, options?: RequestOptions) {
        return http.delete<T>(url, options);
      },
    }),
    [http],
  );
};
