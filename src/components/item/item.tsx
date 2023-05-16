import React from 'react';
import './item.css';

export interface ItemProps {
  name: string;
  onDrag: (e: React.DragEvent<HTMLDivElement>) => void;
};

// get beter name of interface!!!
interface ItemSpecificProps {

}

export const Item: React.FC<ItemProps> = ({
  name,
  onDrag
}) => {
  return (
    <div className='item' draggable onDragStart={onDrag}>
      <span className='item__icon'></span>
      <p className='item__name'>{name}</p>
    </div>
  );
};
