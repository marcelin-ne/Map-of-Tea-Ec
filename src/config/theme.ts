// theme.ts

import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#f3f8ff',
      100: '#c3dbff',
      200: '#8dbfff',
      // Añade más tonos según sea necesario
    },
  },
  fonts: {
    body: 'Arial, sans-serif',
    heading: 'Roboto, sans-serif',
  },
});

export default theme;
