import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import grey from '@material-ui/core/colors/grey';
import brown from '@material-ui/core/colors/brown';
import deepOrange from '@material-ui/core/colors/deepOrange';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      // main: '#1976d2',
      // main: deepOrange['A700'],
      main: grey['800'],
    },
    secondary: {
      main: pink['A100'],
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
