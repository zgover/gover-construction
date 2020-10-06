import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';
import blueGrey from '@material-ui/core/colors/blueGrey';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      // main: '#1976d2',
      // main: deepOrange['A700'],
      main: grey['800'],
    },
    secondary: {
      main: '#c7aa8b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
      darkest: grey['900'],
    } as any,
  },
});

export default theme;
