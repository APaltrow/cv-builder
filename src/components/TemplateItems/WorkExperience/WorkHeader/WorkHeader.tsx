import { FC } from 'react';

import personIcon from '@assets/images/person.svg';
import companyIcon from '@assets/images/company.svg';
import timeIcon from '@assets/images/time.svg';

import { useInternational } from '@hooks';

import style from './WorkHeader.module.scss';

export const WorkHeader: FC = () => {
  const { position, company, timeline } = useInternational('work');

  return (
    <div className={style.description}>
      {/* POSITION*/}
      <div className={style.description_item}>
        <img
          src={personIcon}
          alt="person icon"
          className={style.description_icon}
        />
        <h3 contentEditable>{position}</h3>
      </div>
      {/* COMPANY*/}
      <div className={style.description_item}>
        <img
          src={companyIcon}
          alt="company icon"
          className={style.description_icon}
        />
        <p contentEditable>{company}</p>
      </div>
      {/* TIMEFRAME*/}
      <div className={style.description_item}>
        <img
          src={timeIcon}
          alt="time icon"
          className={style.description_icon}
        />
        <p contentEditable>{timeline}</p>
      </div>
    </div>
  );
};
