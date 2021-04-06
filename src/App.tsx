import { StylesProvider } from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import theme from './styles/theme';

const App: React.FC = () => {
  return (
    <Router>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </StylesProvider>
    </Router>
  );
};

export default App;
