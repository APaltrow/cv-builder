import { FC } from 'react';

import plus from '@assets/images/plus.svg';
import { useInternational } from '@hooks';

import style from './AddButton.module.scss';

interface AddButtonProps {
  onAdd: () => void;
}

export const AddButton: FC<AddButtonProps> = ({ onAdd }) => {
  const add = useInternational('add');

  return (
    <button
      onClick={onAdd}
      className={style.plus_button}
      type="button"
    >
      <img
        src={plus}
        alt="plus icon"
        className={style.plus_icon}
      />
      <span className={style.plus_text}>{add}</span>
    </button>
  );
};
