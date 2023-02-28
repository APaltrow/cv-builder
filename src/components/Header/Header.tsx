import { FC, useContext } from 'react';

import logo from '@assets/images/logoColored.svg';

import { LanguageButton, Navbar } from '@components';

import { LanguageContext, Language } from '@/context/LanguageContext';

import style from './Header.module.scss';

export const Header: FC = () => {
  const { isUA, onLanguageChange } = useContext<Language>(LanguageContext);

  return (
    <header className={style.Header}>
      <img
        src={logo}
        alt="CV builder Logo"
        className={style.logo}
      />
      <h1>CV Builder</h1>

      <div className={style.divider} />

      <Navbar />

      <LanguageButton
        onLangChange={onLanguageChange}
        isUA={isUA}
      />
    </header>
  );
};
