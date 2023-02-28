import { FC } from 'react';

import { useInternational } from '@hooks';

import style from './CTAButton.module.scss';

export const CTAButton: FC = () => {
  const { start } = useInternational('heading');
  return (
    <button
      type="button"
      className={style.cta_button}
    >
      {start}
    </button>
  );
};
