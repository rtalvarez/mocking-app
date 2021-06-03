import { rest } from 'msw';

import { delayedResponse } from './res/delayedResponse';

export const handlers = [
  rest.get('/api/login', (req, res, ctx) => {
    return delayedResponse(
      ctx.status(200),
      ctx.json({ authenticated: Boolean(sessionStorage.getItem('is-authenticated')) }),
    );
  }),
  rest.delete('/api/login', (req, res, ctx) => {
    sessionStorage.removeItem('is-authenticated');

    return delayedResponse(
      ctx.status(200),
      ctx.json({ authenticated: Boolean(sessionStorage.getItem('is-authenticated')) }),
    );
  }),
  rest.post('/api/login', (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem('is-authenticated', 'true');

    return delayedResponse(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({ authenticated: Boolean(sessionStorage.getItem('is-authenticated')) }),
    );
  }),
  rest.get('/api/user', (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem('is-authenticated');

    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized',
        }),
      );
    }

    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      }),
    );
  }),
];
