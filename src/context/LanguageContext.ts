import { createContext, useState } from 'react';

export interface Language {
  isUA: boolean;
  onLanguageChange: () => void;
}

export const LanguageContext = createContext<Language>({
  isUA: false,
  onLanguageChange: () => {},
});

export const useLanguage = () => {
  const [isUA, setUA] = useState(false);

  const onLanguageChange = () => {
    setUA((prev) => !prev);
  };
  return {
    isUA,
    onLanguageChange,
  };
};
