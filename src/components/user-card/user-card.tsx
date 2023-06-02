import React from 'react';
import './user-card.scss';
import { UserResult } from '../user-result';

export const UserCard = () => {
  return (
    <div className='user-card'>
      <h3 className='user-card__title'>Name</h3>
      <UserResult />
      <UserResult />
      <UserResult />
    </div>
  )
};
