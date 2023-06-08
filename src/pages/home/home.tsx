import { Button } from '../../components';
import GitHubIcon from '../../assets/github.svg';

import './home.scss';

export const Home = () => (
  <div className='home'>
    <h1 className='home__title'>Drag and drop demo</h1>
    <div className='home__wrapper'>
      <Button text='Puzzle' linkTo='/puzzle' />
      <Button text='Chemical experiment' linkTo='/experiment' />
    </div>
    <a className='home__link' href='https://github.com/WhiteLady1/Drag-and-drop-in-react' target='_blank' rel='noopener noreferrer'>
      <img src={GitHubIcon} alt='GitHub Icon' />
    </a>
  </div>
);
