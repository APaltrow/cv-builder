import { useState } from 'react';

type UseListTypes = () => [number[], () => void, (item: number) => void];

export const useList: UseListTypes = () => {
  const [items, setItems] = useState<number[]>([]);

  const onAddItem = () => {
    const dutyId = new Date();

    setItems((prev) => [...prev, +dutyId]);
  };

  const onDeleteItem = (item: number) => {
    setItems((prev) => prev.filter((prevItem) => prevItem !== item));
  };

  return [items, onAddItem, onDeleteItem];
};
