import { FC } from 'react';

import { Greeting, GuideWidgets } from '@components';

import style from './Home.module.scss';

export const HomePage: FC = () => {
  return (
    <div className={style.Home}>
      <Greeting />
      <GuideWidgets />
    </div>
  );
};
