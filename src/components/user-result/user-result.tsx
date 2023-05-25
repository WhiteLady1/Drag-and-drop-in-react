import React from 'react';
import './user-result.scss';

interface UserResultProps {
  game: string;
};

export const UserResult = () => (
  <div className='user-result'>
    <p>Game</p>
    <p>lives</p>
  </div>
);
