import { StylesProvider } from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import theme from './styles/theme';
import { store, persistor } from './store';

const App: React.FC = () => {
  return (
    <Router>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StylesProvider injectFirst>
            <ThemeProvider theme={theme}>
              <Routes />
            </ThemeProvider>
          </StylesProvider>
        </PersistGate>
      </Provider>
    </Router>
  );
};

export default App;
