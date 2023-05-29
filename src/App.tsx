import React from 'react';
import { Link } from 'react-router-dom';
import GitHubIcon from './assets/github.svg';
import './App.scss';


function App() {
  return (
    <div className="app">
      <h1 className='app__title'>Drag and drop demo</h1>
      <div className='app__wrapper'>
        <Link className='app__wrapper__button' to='/puzzle'>Puzzle</Link>
        <Link className='app__wrapper__button' to='/experiment'>Chemical experiment</Link>
        <Link className='app__wrapper__button' to='/todo-list'>ToDo list</Link>
      </div>
      <a className='app__link' href='https://github.com/WhiteLady1/Drag-and-drop-in-react' target='_blank' rel='noopener noreferrer'>
        <img src={GitHubIcon} alt='GitHub Icon' />
      </a>
    </div>
  );
}

export default App;
