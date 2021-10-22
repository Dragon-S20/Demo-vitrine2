import './App.css';
import Header from './Components/Header.js'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#fef1e6',
      main: '#f9d5a7',
      dark: '#ffb085',
      contrastText: '#fff',
    },
    secondary: {
      light: '#b85672',
      main: '#852747',
      dark: '#540020',
      contrastText: '#000',
    },
  },
});



function App() {
  return (
  
    <ThemeProvider theme={theme}>
    <Header />
    </ThemeProvider>
  
  )
}

export default App;
