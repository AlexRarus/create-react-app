import { useEffect, useState } from 'react';
import { isBrowser } from 'src/utils/detectEnvironment';


interface IThemeItem {
  themeType: string;
}

const initialThemesList: IThemeItem[] = [{ themeType: 'light' }, { themeType: 'dark' }];

let defaultTheme = 'light';
// todo ssr костыль
if (isBrowser) {
  defaultTheme = window.localStorage.getItem('theme') || 'light';
}

export const useThemeMode = (): [type: string, setType: (type: string) => void, list: IThemeItem[]] => {
  const [themeType, setThemeType] = useState<string>(defaultTheme);
  const toggleTheme = (type: string) => {
    setThemeType(type);
    window.localStorage.setItem('theme', type);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');

    localTheme && setThemeType(localTheme);
  }, []);

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localTheme
      ? setThemeType(`dark`)
      : localTheme
      ? setThemeType(localTheme)
      : setThemeType('light');
  }, []);

  return [themeType, toggleTheme, initialThemesList];
};
