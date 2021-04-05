import { StylesProvider } from '@material-ui/core/styles';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

const App: React.FC = () => {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div>Hello World</div>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
