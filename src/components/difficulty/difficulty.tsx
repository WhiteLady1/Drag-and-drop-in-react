import React from 'react';
import './difficulty.css';

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
      <button onClick={() => handleClick(EASY)}>easy</button>
      <button onClick={() => handleClick(MIDLE)}>midle</button>
      <button onClick={() => handleClick(HARD)}>hard</button>
    </div>
  );
};
