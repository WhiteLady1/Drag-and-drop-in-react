import React from 'react';
import './difficulty.scss';

const EASY = 'puzzle-mask';
const MIDLE = 'puzzle-forest';
const HARD = 'puzzle-sky';

export type DifficultyLevel = typeof EASY | typeof MIDLE | typeof HARD;

interface DifficultyProps {
  onClick: (text: DifficultyLevel) => void;
};

export const Difficulty: React.FC<DifficultyProps> = ({
  onClick,
}) => {
  const handleClick = (level: DifficultyLevel) => {
    onClick(level);
  };

  return (
    <div className='difficulty'>
      <button className='difficulty__button difficulty__button--easy' onClick={() => handleClick(EASY)}>easy</button>
      <button className='difficulty__button difficulty__button--medium' onClick={() => handleClick(MIDLE)}>medium</button>
      <button className='difficulty__button difficulty__button--hard' onClick={() => handleClick(HARD)}>hard</button>
    </div>
  );
};
