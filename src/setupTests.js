import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { AppProvider } from './contexts/AppContext';

import lightTheme from './themes/light';

export const customProviderRender = (component) => {
  return render(
    <ThemeProvider theme={lightTheme}>
      <AppProvider>{component}</AppProvider>
    </ThemeProvider>
  );
};
