import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App.js';
import './index.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const el = document.getElementById('root');

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(el);

root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
);
