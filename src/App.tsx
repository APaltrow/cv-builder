import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from '@components';
import { ResumeTemplate, HomePage, AboutPage } from '@pages';

import { LanguageContext, useLanguage } from './context/LanguageContext';

import '@style/app.scss';

export const App: FC = () => {
  const value = useLanguage();

  return (
    <LanguageContext.Provider value={value}>
      <div className="app">
        <Header />

        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/templates"
            element={<ResumeTemplate />}
          />
          <Route
            path="/about"
            element={<AboutPage />}
          />
        </Routes>
      </div>
    </LanguageContext.Provider>
  );
};
