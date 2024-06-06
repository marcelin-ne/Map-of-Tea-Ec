// App.tsx

import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './config/theme'; // Ruta al archivo de tema que has creado


const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  );
};





ReactDOM.render(<App />, document.getElementById('root'));
