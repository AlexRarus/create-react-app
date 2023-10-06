import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { StaticContextProvider } from 'src/providers/static-context-provider';
import { ThemeProvider } from 'src/providers/theme-provider';

import Root from './root';
import './i18n';

hydrate(
  <BrowserRouter>
    <StaticContextProvider context={null}>
      <ThemeProvider>
        <Root />
      </ThemeProvider>
    </StaticContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
