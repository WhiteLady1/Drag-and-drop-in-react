import React from 'react';
import './welcome.scss';
import { useLocalStorage } from '../../hooks';

export const Welcome = () => {
  const [userName, setUserName] = React.useState<string>();
  const { setItem } = useLocalStorage();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userName) {
      setItem('user', userName);
    };
  };

  return (
    <div className='welcome'>
      <h1 className='welcome__title'>Welcome</h1>
      <p className='welcome__text'>Please enter your name or nickname to continue.</p>
      <p className='welcome__text'>Don't worry, it's totally safe.</p>
      <form className='welcome__form' onSubmit={(e) => handleSubmit(e)}>
        <input className='welcome__form__input' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)} />
        <button className={userName ? 'welcome__form__button' : 'welcome__form__button welcome__form__button--disabled'} type='submit'>Submit</button>
      </form>
    </div>
  );
};
