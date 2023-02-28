import { FC } from 'react';

import { useInternational } from '@hooks';

import style from './NamePosition.module.scss';

export const NamePosition: FC = () => {
  const { fullname, position } = useInternational('title');

  return (
    <section className={style.name_position}>
      <h2
        contentEditable
        className={style.full_name}
      >
        {fullname}
      </h2>
      <p
        contentEditable
        className={style.position}
      >
        {position}
      </p>
    </section>
  );
};
