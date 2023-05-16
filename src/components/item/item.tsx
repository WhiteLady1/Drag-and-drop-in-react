import React from 'react';
import './item.css';

export interface ItemProps {
  name: string;
  selected?: boolean;
  onDrag?: (e: React.DragEvent<HTMLDivElement>) => void;
  onCanceld?: () => void;
};

export const Item: React.FC<ItemProps> = ({
  name,
  selected = false,
  onDrag,
  onCanceld
}) => {
  return (
    <div className={selected ? 'item item--selected' : 'item'} draggable={selected ? false : true} onDragStart={onDrag} onClick={onCanceld}>
      <span className='item__icon'></span>
      <p className='item__name'>{name}</p>
    </div>
  );
};
