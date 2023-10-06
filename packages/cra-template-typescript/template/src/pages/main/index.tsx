import React from 'react';
import { useTranslation } from 'react-i18next';

import { WrapperMainPage } from './styles'
import {useThemeContext} from "../../providers/theme-provider";

export const MainPage = () => {
  const { i18n, t } = useTranslation('main');
  const { themeType, toggleTheme } = useThemeContext();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language !== 'en' ? 'en' : 'ru');
  };

  const changeTheme = () => {
    toggleTheme(themeType === 'light' ? 'dark' : 'light');
  };

  return <WrapperMainPage>
    <div>
      {i18n.language} - {t('greeting')}
    </div>
    <div>
      <button onClick={changeTheme}>change theme</button>
    </div>
    <div>
      <button onClick={changeLanguage}>change lang</button>
    </div>
  </WrapperMainPage>
}
