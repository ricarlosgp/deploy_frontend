import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';

import { MyContext } from './myContext';

import { AuthProvider } from './hooks/auth';

import { Routes } from './routes'; 

import theme from './styles/theme';


//pesquisar o que é ReactDOM
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <Routes />  
      </AuthProvider>    
    </ThemeProvider>
  </React.StrictMode>
 
)
