import React from 'react';
import './user-result.scss';

interface UserResultProps {
  game: string;
};

export const UserResult = () => (
  <div className='user-result'>
    <p className='user-result__title'>Game</p>
    <p className='user-result__text'>lives</p>
  </div>
);
