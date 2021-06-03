import React from 'react';

import { LoginPage, UserPage } from './components';
import { useLogin } from './hooks/useLogin';
import './App.css';

function App() {
  const { data: isAuthenticated } = useLogin();

  return isAuthenticated ? <UserPage /> : <LoginPage />;
}

export default App;
