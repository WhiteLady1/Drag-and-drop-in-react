import React from 'react';
import './result-card.css';

interface ReasultCardProps {
  reaction: string;
};

export const ReasultCard: React.FC<ReasultCardProps> = ({
  reaction
}) => (
  <div className='result-card'>
    <h3>{reaction}</h3>
  </div>
);
