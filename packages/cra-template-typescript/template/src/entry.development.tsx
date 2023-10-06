import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import { StaticContextProvider } from 'src/providers/static-context-provider';
import { ThemeProvider } from 'src/providers/theme-provider';

import Root from './root';
import './i18n';

const root  = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <StaticContextProvider context={null}>
      <ThemeProvider>
        <Root />
      </ThemeProvider>
    </StaticContextProvider>
  </BrowserRouter>
);
