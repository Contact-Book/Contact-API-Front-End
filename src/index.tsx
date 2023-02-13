import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import { theme } from './Theme';
import App from './App';
import AppProvider from './context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <AppProvider>
      <App />
    </AppProvider>
  </ThemeProvider>
);
