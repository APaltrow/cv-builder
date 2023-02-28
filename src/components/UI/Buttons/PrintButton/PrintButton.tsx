import { FC } from 'react';

import printIcon from '@assets/images/printer.svg';
import { useInternational } from '@hooks';

import style from './PrintButton.module.scss';

interface PrintButtonProps {
  onPrint: () => void;
}
export const PrintButton: FC<PrintButtonProps> = ({ onPrint }) => {
  const print = useInternational('print');

  return (
    <button
      className={style.print_btn}
      type="button"
      onClick={onPrint}
    >
      <img
        src={printIcon}
        alt="print"
        className={style.print_img}
      />
      {print}
    </button>
  );
};
