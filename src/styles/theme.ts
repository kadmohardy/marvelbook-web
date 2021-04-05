import { createMuiTheme } from '@material-ui/core/styles';

const font = "'Lato', sans-serif";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#101fE0',
    },
    secondary: {
      main: '#2C2F30',
    },
    background: {
      default: '#fff',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.85)',
    },
  },
  typography: {
    fontFamily: font,
    button: {
      textTransform: 'none',
    },
  },
});

export default theme;
