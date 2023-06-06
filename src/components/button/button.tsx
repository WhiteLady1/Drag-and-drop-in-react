import React from 'react';
import { Link } from 'react-router-dom';
import './button.scss';
import { DifficultyLevel } from '../difficulty';

interface ButtonProps {
  text: string;
  linkTo?: string;
  bgColor?: DifficultyLevel;
  isDisabled?: boolean;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  text,
  linkTo,
  bgColor,
  isDisabled = false,
  onClick,
}) => {
  const getClassName = () => {
    if (bgColor === 'puzzle-mask') return 'button button--easy';
    if (bgColor === 'puzzle-forest') return 'button button--medium';
    if (bgColor === 'puzzle-sky') return 'button button--hard';
    return 'button';
  };
  return (
    <>
      {linkTo? (
        <Link className={getClassName()} to={linkTo}>{text}</Link>
      ) : (
        <button className={getClassName()} disabled={isDisabled} onClick={onClick}>{text}</button>
      )}
    </>
  );
};
