import { FC } from 'react';

import deleteIcon from '@assets/images/delete.svg';

import style from './DeleteButton.module.scss';

interface DeleteButtonProps {
  onDelete: () => void;
}

export const DeleteButton: FC<DeleteButtonProps> = ({ onDelete }) => {
  return (
    <button
      className={style.del_button}
      type="button"
      onClick={onDelete}
    >
      <img
        className={style.del_icon}
        src={deleteIcon}
        alt="delete icon"
      />
    </button>
  );
};
