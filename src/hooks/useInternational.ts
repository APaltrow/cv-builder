import { useContext } from 'react';

import { EN, UA } from '@constants';

import { LanguageContext, Language } from '@/context/LanguageContext';

type Category =
  | 'navigation'
  | 'work'
  | 'experience'
  | 'duty'
  | 'print'
  | 'add'
  | 'skills'
  | 'about'
  | 'education'
  | 'title'
  | 'contacts'
  | 'heading'
  | 'widgets';

export const useInternational = (category: Category) => {
  const { isUA } = useContext<Language>(LanguageContext);

  return isUA ? UA[category] : EN[category];
};
