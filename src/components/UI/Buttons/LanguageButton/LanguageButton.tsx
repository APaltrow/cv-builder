import { FC } from 'react';

import UAIcon from '@assets/images/UA.png';
import ENIcon from '@assets/images/EN.png';

import style from './LanguageButton.module.scss';

interface LanguageProps {
  isUA: boolean;
  onLangChange: () => void;
}

export const LanguageButton: FC<LanguageProps> = ({ onLangChange, isUA }) => {
  return (
    <button
      className={style.lang_btn}
      type="button"
      onClick={onLangChange}
    >
      <img
        src={isUA ? UAIcon : ENIcon}
        alt="language flag"
        className={style.lang_img}
      />
      {isUA ? 'UA' : 'EN'}
    </button>
  );
};
