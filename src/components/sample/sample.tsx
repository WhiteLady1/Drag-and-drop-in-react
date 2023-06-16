import React from 'react';
import './sample.scss';

const MOBILE = 'isMobile';
const TABLET = 'isTablet';
const DESKTOP = 'isDesktop';

export type DEVICES = typeof MOBILE | typeof TABLET | typeof DESKTOP;

export interface ItemProps {
  name: string;
  image: string;
  forDevice: DEVICES;
  selected?: boolean;
  onTable?: boolean;
  coordinates?: number[];
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
  onTable = false,
  coordinates = undefined,
  onDrag = () => {},
  onCanceld = () => {},
  onTouchStart = () => {},
  onTouchMove = () => {},
  onTouchEnd = () => {},
  onTouchCancel = () => {},
}) => {
  const getTranslateCoordinates = (array: number[] | undefined) => {
    if (array) {
      // return `rotate(${array[0]}deg) translate(${array[1]}px)`;
      return `translate(${array[0]}px, ${array[1]}px)`
    } else {
      return 'none';
    };
  };

  return (
    <>
      {forDevice === 'isDesktop' && (
        <div
          className={selected ? 'item item--selected' : 'item'}
          draggable={selected ? false : true}
          onDragStart={onDrag}
          onClick={onCanceld}
          style={{
            transform: getTranslateCoordinates(coordinates),
          }}
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
          style={{
            transform: getTranslateCoordinates(coordinates),
          }}
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