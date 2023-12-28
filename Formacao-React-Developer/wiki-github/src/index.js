import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Pages/App';
import { ChakraProvider } from '@chakra-ui/react';
import  GlobalStyle  from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </ChakraProvider>
);
