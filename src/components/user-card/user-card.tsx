import React from 'react';
import './user-card.scss';

export const UserCard = () => {
  return (
    <div className='user-card'>
      <h3 className='user-card__title'>Name</h3>
      <div>lives</div>
      <div>puzzles:
        <p>easy</p>
        <p>midle</p>
        <p>hard</p>
      </div>
    </div>
  )
};
