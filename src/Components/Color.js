import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#fef1e6',
      main: '#f9d5a7',
      dark: '#ffb085',
      contrastText: '#fff',
    },
    secondary: {
      light: '#90aacb',
      main: '#f44336',
      dark: '#617b9a',
      contrastText: '#000',
    },
  },
});

export default theme