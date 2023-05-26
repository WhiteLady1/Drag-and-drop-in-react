import React from 'react';
import './sample.scss';

export interface ItemProps {
  name: string;
  image: string;
  selected?: boolean;
  onDrag?: () => void;
  onCanceld?: () => void;
};

export const Sample: React.FC<ItemProps> = ({
  name,
  image,
  selected = false,
  onDrag = () => {},
  onCanceld = () => {},
}) => {
  return (
    <div
      className={selected ? 'item item--selected' : 'item'}
      draggable={selected ? false : true}
      onDragStart={onDrag}
      onTouchMove={onDrag}
      onClick={onCanceld}
    >
      <span className='item__icon' style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}>
      </span>
      <p className='item__name'>{name}</p>
    </div>
  );
};
