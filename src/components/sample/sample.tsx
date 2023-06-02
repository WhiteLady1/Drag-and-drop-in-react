import React from 'react';
import './sample.scss';

const MOBILE = 'isMobile';
const TABLET = 'isTablet';
const Desktop = 'isDesktop';

export type DEVICES = typeof MOBILE | typeof TABLET | typeof Desktop;

export interface ItemProps {
  name: string;
  image: string;
  forDevice: DEVICES;
  selected?: boolean;
  onDrag?: () => void;
  onCanceld?: () => void;
  onTouchStart?: (e: React.TouchEvent<HTMLDivElement>) => void;
  onTouchMove?: (e: React.TouchEvent<HTMLDivElement>) => void;
  onTouchEnd?: (e: React.TouchEvent<HTMLDivElement>) => void;
  onTouchCancel?: (e: React.TouchEvent<HTMLDivElement>) => void;
};

export const Sample: React.FC<ItemProps> = ({
  name,
  image,
  forDevice,
  selected = false,
  onDrag = () => {},
  onCanceld = () => {},
  onTouchStart = () => {},
  onTouchMove = () => {},
  onTouchEnd = () => {},
  onTouchCancel = () => {},
}) => {
  return (
    <>
      {forDevice === 'isDesktop' && (
        <div
          className={selected ? 'item item--selected' : 'item'}
          draggable={selected ? false : true}
          onDragStart={onDrag}
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
      )}
      {forDevice === 'isTablet' && (
        <div
          className={selected ? 'item item--selected' : 'item'}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onTouchCancel={onTouchCancel}
        >
          <span className='item__icon' style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            }}
          />
          <p className='item__name'>{name}</p>
        </div>
    )}
    </>
  );
};
