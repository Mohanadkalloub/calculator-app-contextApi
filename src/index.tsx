import React from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/css/style.css";
import App from './pages/App';
import { AppContextProvider } from './context/app-context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);

