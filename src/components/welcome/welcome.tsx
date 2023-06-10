import React from 'react';
import './welcome.scss';
import { Button } from '..';

interface WelcomeProps {
  onSubmit: () => void;
};

export const Welcome: React.FC<WelcomeProps> = ({
  onSubmit,
}) => {
  const [userName, setUserName] = React.useState<string>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userName) {
      localStorage.setItem('user', userName);
      onSubmit();
    };
  };

  return (
    <div className='welcome'>
      <h2 className='welcome__title'>Welcome</h2>
      <p className='welcome__text'>Please enter your name or nickname to continue.</p>
      <p className='welcome__text'>Don't worry, it's totally safe.</p>
      <form className='welcome__form' onSubmit={(e) => handleSubmit(e)}>
        <input className='welcome__form__input' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)} />
        <Button text='Submit' type='submit' />
      </form>
    </div>
  );
};
