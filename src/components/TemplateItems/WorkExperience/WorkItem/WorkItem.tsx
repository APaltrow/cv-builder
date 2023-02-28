import { FC } from 'react';

import { List } from '@components';
import { useInternational } from '@hooks';

import { WorkHeader } from '../WorkHeader/WorkHeader';

import style from './WorkItem.module.scss';

export const WorkItem: FC = () => {
  const duty = useInternational('duty');

  return (
    <div className={style.work_experience_item}>
      <WorkHeader />

      <List
        message={duty}
        isCounted={true}
      />
    </div>
  );
};
