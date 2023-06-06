import React from 'react';
import './difficulty.scss';

const EASY = 'puzzle-mask';
const MIDLE = 'puzzle-forest';
const HARD = 'puzzle-sky';

export type DifficultyLevel = typeof EASY | typeof MIDLE | typeof HARD;

interface DifficultyProps {
  selectedDificulty?: DifficultyLevel,
  onClick: (text: DifficultyLevel) => void;
};

export const Difficulty: React.FC<DifficultyProps> = ({
  selectedDificulty,
  onClick,
}) => {
  const handleClick = (level: DifficultyLevel) => {
    onClick(level);
  };

  return (
    <div className='difficulty'>
      <button className={`difficulty__button difficulty__button--easy ${selectedDificulty === 'puzzle-mask' && ' difficulty__button--selected'}`} onClick={() => handleClick(EASY)}>easy</button>
      <button className={`difficulty__button difficulty__button--medium ${selectedDificulty === 'puzzle-forest' && ' difficulty__button--selected'}`} onClick={() => handleClick(MIDLE)}>medium</button>
      <button className={`difficulty__button difficulty__button--hard ${selectedDificulty === 'puzzle-sky' && ' difficulty__button--selected'}`} onClick={() => handleClick(HARD)}>hard</button>
    </div>
  );
};
