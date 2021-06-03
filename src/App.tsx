import React from 'react';

import { useLogin } from './hooks/useLogin';
import logo from './logo.svg';
import './App.css';

function App() {
  const login = useLogin();

  console.log('login', login);

  return (
    <div className="App">
      <header className="App-header">
        <img alt="logo" className="App-logo" src={logo} />
        <p>trash</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          rel="noopener noreferrer"
          target="_blank"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
