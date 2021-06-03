import { rest } from 'msw';

import { baseUrl } from './baseUrl';

export const handlers = [
  rest.get(`${baseUrl}/api/login`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ authenticated: Boolean(sessionStorage.getItem('is-authenticated')) }),
    );
  }),
  rest.delete(`${baseUrl}/api/login`, (req, res, ctx) => {
    sessionStorage.removeItem('is-authenticated');

    return res(
      ctx.status(200),
      ctx.json({ authenticated: Boolean(sessionStorage.getItem('is-authenticated')) }),
    );
  }),
  rest.post(`${baseUrl}/api/login`, (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem('is-authenticated', 'true');

    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({ authenticated: Boolean(sessionStorage.getItem('is-authenticated')) }),
    );
  }),
];
