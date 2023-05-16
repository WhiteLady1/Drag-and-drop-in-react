import React from 'react';
import './experimental-table.css';
import { ItemProps } from '../item';

interface ExperimentalTableProps {
  itemList: ItemProps[];
};

export const ExperimantalTable: React.FC<ExperimentalTableProps> = ({
  itemList,
}) => {
  return (
    <div className='experimental-table'>
      {
        itemList.map(item => <p>{item.name}</p>)
      }
    </div>
  );
};
