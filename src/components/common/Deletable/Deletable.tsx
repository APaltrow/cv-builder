import { FC } from 'react';

import { DeleteButton } from '../../UI/Buttons/DeleteButton/DeleteButton';

import style from './Deletable.module.scss';

interface DeletableProps {
  children: React.ReactNode;
  onDelete: () => void;
}

export const Deletable: FC<DeletableProps> = ({ children, onDelete }) => {
  return (
    <div className={style.Deletable}>
      {children}

      <DeleteButton onDelete={onDelete} />
    </div>
  );
};
