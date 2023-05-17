import React from 'react';
import './result-card.css';
import { REACTIONS_DATA } from '../../data/data';

export type REACTIONS = 'corrosive' | 'explosion' | 'poison-gas' | 'neutral';

interface ReasultCardProps {
  reaction: REACTIONS;
  onClose: () => void;
};

export const ReasultCard: React.FC<ReasultCardProps> = ({
  reaction,
  onClose
}) => (
  <div className='result-card'>
    <div className='result-card__wrapper'>
      <h3 className='result-card__wrapper__title'>{REACTIONS_DATA.find(item => item.id === reaction)?.name}</h3>
      <span className='result-card__wrapper__image' style={{ backgroundImage: `url(${REACTIONS_DATA.find(item => item.id === reaction)?.images})`}} />
      <p className='result-card__wrapper__description'>{REACTIONS_DATA.find(item => item.id === reaction)?.description}</p>
      <button className='result-card__wrapper__button' onClick={onClose}>Close</button>
    </div>
  </div>
);

