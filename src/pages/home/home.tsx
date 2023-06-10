import React from 'react';
import { Button, Welcome } from '../../components';
import GitHubIcon from '../../assets/github.svg';

import './home.scss';

export const Home = () => {
  const [user, setUser] = React.useState<string | null>(null);

  const getUser = () => {
    if (localStorage.getItem('user') !== null) {
      setUser(localStorage.getItem('user'))
    }
  }

  const removeUser = () => {
    localStorage.removeItem('user');
    setUser(null);
    console.log(user)
  };

  return (
    <div className='home'>
      <h1 className='home__title'>Drag and drop demo</h1>
      {user !== null ? (
        <div className='home__wrapper'>
          <Button text='Puzzle' linkTo='/puzzle' />
          <Button text='Chemical experiment' linkTo='/experiment' />
        </div>
      ) : (
        <Welcome onSubmit={getUser} />
      )}
      <a className='home__link' href='https://github.com/WhiteLady1/Drag-and-drop-in-react' target='_blank' rel='noopener noreferrer'>
        <img src={GitHubIcon} alt='GitHub Icon' />
      </a>
      <button onClick={removeUser}>remove user</button>
    </div>
  );
};
