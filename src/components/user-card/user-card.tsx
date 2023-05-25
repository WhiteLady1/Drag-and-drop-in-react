import React from 'react';
import './user-card.scss';
import { UserResult } from '../user-result';

export const UserCard = () => {
  return (
    <div>
      <h3>Name</h3>
      <UserResult />
      <UserResult />
      <UserResult />
    </div>
  )
};
