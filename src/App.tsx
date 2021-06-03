import React from 'react';

import { LoginPage, UserPage } from './components';
import { useLogin } from './hooks/useLogin';
import './App.css';

function App() {
  const { data: isAuthenticated, isLoading } = useLogin();

  console.log('login', isAuthenticated, isLoading);

  return isAuthenticated ? <UserPage /> : <LoginPage />;
}

export default App;
