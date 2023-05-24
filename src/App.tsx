import React from 'react';
import GitHubIcon from './assets/github.svg';
import './App.scss';


function App() {
  return (
    <div className="app">
      <h1 className='app__title'>Drag and drop demo</h1>
      <div className='app__wrapper'>
        <a className='app__wrapper__button' href='/experiment'>Chemical experiment</a>
        <a className='app__wrapper__button' href='/todo-list'>ToDo list</a>
        <a className='app__wrapper__button' href='/puzzle'>Puzzle</a>
      </div>
      <a className='app__link' href='https://github.com/WhiteLady1/Drag-and-drop-in-react' target='_blank' rel='noopener noreferrer'>
        <img src={GitHubIcon} alt='GitHub Icon' />
      </a>
    </div>
  );
}

export default App;
