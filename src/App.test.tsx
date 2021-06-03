import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import App from './App';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function renderWithContext(element: JSX.Element) {
  return render(<QueryClientProvider client={queryClient}>{element}</QueryClientProvider>);
}

test('renders Not logged in when not authenticated', async () => {
  renderWithContext(<App />);

  await waitFor(() => {
    const linkElement = screen.getByText(/Not logged in/);

    expect(linkElement).toBeInTheDocument();
  });
});

test('it loggs in', async () => {
  renderWithContext(<App />);

  const buttonElement = screen.getByText('Login');

  fireEvent.click(buttonElement);

  await waitFor(() => {
    const linkElement = screen.getByText(/Channel Settings/);

    expect(linkElement).toBeInTheDocument();
  });
});

test('it logs out', async () => {
  renderWithContext(<App />);

  const buttonElement = screen.getByText('Logout');

  fireEvent.click(buttonElement);

  await waitFor(() => {
    const linkElement = screen.getByText(/Not logged in/);

    expect(linkElement).toBeInTheDocument();
  });
});
