import React from 'react';
import './styles/global.css';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from "history";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import Routes from "./Routes"

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#3FB54B',
            main: '#3FB54B',
            dark: '#318739',
            contrastText: '#fff',
        },
        secondary: {
            light: '#4c9beb',
            main: '#2687E9',
            dark: '#167fe7',
            contrastText: '#fff',
        },
        error: {
            light: '#c5334e',
            main: '#B00020',
            dark: '#8a041d',
            contrastText: '#fff',
        }
    },
});

export const history = createBrowserHistory();

function App() {
  return (
      <MuiThemeProvider theme={theme}>
          <Router history={history}>
              <Routes />
          </Router>
    </MuiThemeProvider>
  );
}

export default App;
