import React from 'react';
import './result-card.css';
import { ReactionsData } from '../../data/data';

interface ReasultCardProps {
  reaction: ReactionsData;
  onClose: () => void;
};

export const ReasultCard: React.FC<ReasultCardProps> = ({
  reaction,
  onClose
}) => (
  <div className='result-card'>
    <div className='result-card__wrapper'>
      <h3 className='result-card__wrapper__title'>{reaction.name}</h3>
      <span className='result-card__wrapper__image' style={{ backgroundImage: `url(${reaction.images})`}} />
      <p className='result-card__wrapper__description'>{reaction.description}</p>
      <button className='result-card__wrapper__button' onClick={onClose}>Close</button>
    </div>
  </div>
);

