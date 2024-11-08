import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import CoinContextProvider from './context/CoinContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <CoinContextProvider>
    <App />
    </CoinContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

