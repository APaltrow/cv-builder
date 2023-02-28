import { FC } from 'react';

import { AddButton, Deletable } from '@components';

import { useList } from '@hooks';

import style from './List.module.scss';

interface ListProps {
  message: string;
  isCounted: boolean;
}

export const List: FC<ListProps> = ({ message, isCounted }) => {
  const [items, onAddItem, onDeleteItem] = useList();

  return (
    <>
      <ol className={style.List}>
        <li
          contentEditable
          className={isCounted ? style.list_item : style.list_item_no_style}
        >
          {message || 'list item'}
        </li>
        {items.map((item) => (
          <Deletable onDelete={() => onDeleteItem(item)}>
            <li
              key={item}
              contentEditable
              className={isCounted ? style.list_item : style.list_item_no_style}
            >
              {message || 'list item'}
            </li>
          </Deletable>
        ))}

        <span className={style.buttons}>
          <AddButton onAdd={onAddItem} />
        </span>
      </ol>
    </>
  );
};
