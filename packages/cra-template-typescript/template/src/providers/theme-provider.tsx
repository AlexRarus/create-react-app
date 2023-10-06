import React, { createContext, useContext, useEffect, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { isMobile as isMobileDevice } from 'react-device-detect';

import { useThemeMode } from './hooks';

const Context = createContext<any>({});
const Provider = Context.Provider;

interface ITheme {
  themeType: string,
  background: string;
  color: string;
  isMobile?: boolean;
  isTablet?: boolean;
}

const LIGHT_THEME = {
  themeType: 'light',
  background: 'white',
  color: 'black',
};

const DARK_THEME = {
  themeType: 'dark',
  background: 'black',
  color: 'white',
};

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<ITheme>(LIGHT_THEME);
  const isMobile = useMediaQuery('(max-width:768px)') || isMobileDevice;
  const isTablet = useMediaQuery('(max-width:1000px)');
  const [themeType, toggleTheme, initialThemesList] = useThemeMode();

  useEffect(() => {
    const theme = themeType === 'light' ? LIGHT_THEME : DARK_THEME;
    setTheme({
      ...theme,
      isTablet,
      isMobile,
      themeType,
    });
  }, [isTablet, isMobile, themeType]);

  return (
    <Provider value={{ themeType, toggleTheme, initialThemesList, theme }}>
      {children}
    </Provider>
  );
};

export const useThemeContext = () => useContext(Context);
