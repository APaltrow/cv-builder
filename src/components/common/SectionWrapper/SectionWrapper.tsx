import React, { FC } from 'react';

import { AddButton } from '@components';

import style from './SectionWrapper.module.scss';

interface SectionProps {
  children: React.ReactNode;
  sectionName: string;
  onAddNew?: () => void;
}

export const SectionWrapper: FC<SectionProps> = ({
  children,
  sectionName,
  onAddNew,
}) => {
  return (
    <section className={style.container}>
      {sectionName && <h2 contentEditable>{sectionName}</h2>}

      {children}

      {onAddNew ? (
        <span className={style.buttons}>
          <AddButton onAdd={onAddNew} />
        </span>
      ) : null}
    </section>
  );
};
