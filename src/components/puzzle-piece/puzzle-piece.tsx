import React from 'react';
import { DifficultyLevel } from '../difficulty';

interface PiecesProps {
  image: string;
  sourceFile: DifficultyLevel;
  onDragStart: (e: React.DragEvent<HTMLElement>) => void;
  onDragEnter: (e: React.DragEvent<HTMLElement>) => void;
  onDragOver: (e:React.DragEvent<HTMLDivElement>) => void;
  onDragEnd: (e:React.DragEvent<HTMLDivElement>) => void;
};

export const PuzzlePiece: React.FC<PiecesProps> = ({
  image,
  sourceFile,
  onDragStart,
  onDragEnter,
  onDragOver,
  onDragEnd,
}) => (
  <img
    src={process.env.PUBLIC_URL + `/${sourceFile}/${image}`}
    alt={`puzzle ${image}`}
    style={{ cursor: 'move' }}
    width={60}
    height={60}
    draggable
    onDragStart={onDragStart}
    onDragEnter={onDragEnter}
    onDragOver={onDragOver}
    onDragEnd={onDragEnd}
  />
);
