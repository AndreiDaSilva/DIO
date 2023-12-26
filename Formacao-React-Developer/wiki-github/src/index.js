import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';

import GlobalStyles from "./styles"
import { ChakraProvider } from '@chakra-ui/react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <React.StrictMode>
      <GlobalStyles />
      <App />
    </React.StrictMode>
  </ChakraProvider>
);
