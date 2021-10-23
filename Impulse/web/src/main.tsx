import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import './styles/global.css';

// Authentication Provider
import { AuthProvider } from './contexts/auth';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
