import { FC } from 'react';
import { Link } from 'react-router-dom';

import { CTAButton } from '@components';
import { useInternational } from '@hooks';

import style from './Greeting.module.scss';

export const Greeting: FC = () => {
  const { welcome, cta } = useInternational('heading');

  return (
    <section className={style.greeting}>
      <h1 className={style.welcome}>{welcome}</h1>
      <h3 className={style.cta}>{cta}</h3>
      <Link to="/templates">
        <CTAButton />
      </Link>
    </section>
  );
};
