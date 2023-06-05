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
  coordinates = undefined,
  onDrag = () => {},
  onCanceld = () => {},
  onTouchStart = () => {},
  onTouchMove = () => {},
  onTouchEnd = () => {},
  onTouchCancel = () => {},
}) => (
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
        className={coordinates ? 'item item--in-motion' : 'item'}
        style={coordinates && {
          top: coordinates[0] + 10,
          left: coordinates[1] + 10,
        }}
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
