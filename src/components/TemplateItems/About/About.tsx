import { FC } from 'react';

import { SectionWrapper } from '@components';
import { useInternational } from '@hooks';

import style from './About.module.scss';

export const About: FC = () => {
  const { header, item } = useInternational('about');

  return (
    <SectionWrapper sectionName={header}>
      <p
        contentEditable
        className={style.about_text}
      >
        {item}
      </p>
    </SectionWrapper>
  );
};
