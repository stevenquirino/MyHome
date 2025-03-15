import React from 'react';
import { createRoot } from 'react-dom/client'; // Importe createRoot
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import App from './App';

// Seleciona o elemento raiz
const container = document.getElementById('root');

// Cria a raiz
const root = createRoot(container);

// Renderiza o aplicativo
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);