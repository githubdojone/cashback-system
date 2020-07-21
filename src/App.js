import React from 'react';
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./Routes";
import lightTheme from "./themes/light";
import GlobalStyle from './styles/global';
import { AppProvider } from './contexts/AppContext';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Router>
        <AppProvider>
          <Routes />
          <GlobalStyle />
        </AppProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
