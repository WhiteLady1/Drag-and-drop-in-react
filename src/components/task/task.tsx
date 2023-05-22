import React from 'react';
import './task.css';

export interface TaskProps {
  text: string;
  done: boolean;
  onClick: () => void;
  onDragStart: (e:React.DragEvent<HTMLDivElement>) => void;
  onDragEnter: (e:React.DragEvent<HTMLDivElement>) => void;
  onDragOver: (e:React.DragEvent<HTMLDivElement>) => void;
  onDragEnd: (e:React.DragEvent<HTMLDivElement>) => void;
};

export const Task: React.FC<TaskProps> = ({
  text,
  done = false,
  onClick,
  onDragStart,
  onDragEnter,
  onDragOver,
  onDragEnd,
}) => (
  <div
    className='task'
    draggable
    onDragStart={onDragStart}
    onDragEnter={onDragEnter}
    onDragOver={onDragOver}
    onDragEnd={onDragEnd}
  >
    <label className='task__wrapper'>
      <input  type='checkbox' checked={done} onChange={onClick}/>
      <p>{text}</p>
    </label>
  </div>
);
