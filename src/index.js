import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserProvider from './context/UserContext';
import Context from './context/Context';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <Context>
        <App />
      </Context>
    </UserProvider>
  </React.StrictMode>
);