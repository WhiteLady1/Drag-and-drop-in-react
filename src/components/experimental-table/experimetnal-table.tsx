import React from 'react';
import './experimental-table.css';
import { ListItem } from '../../App';
import { Item } from '../item';

interface ExperimentalTableProps {
  itemList: ListItem[];
  onDrop: () => void;
  onCanceld: (id: string) => void;
};

export const ExperimantalTable: React.FC<ExperimentalTableProps> = ({
  itemList,
  onDrop,
  onCanceld
}) => {
  const [dragEntered, setDragEntered] = React.useState(false);
  const [mix, setMix] = React.useState(false);

  const handelDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log('droped');
  };

  const handleDrop = () => {
    onDrop();
    setDragEntered(false);
  };

  return (
    <div
      className={dragEntered ? 'experimental-table experimental-table--entered' : 'experimental-table'}
      onDragEnter={() => setDragEntered(true)}
      onDragLeave={() => setDragEntered(false)}
      onDragOver={handelDragOver}
      onDrop={handleDrop}
    >
      <div className='experimental-table__indredients-wrapper'>
        {itemList.map(item => (
          <Item key={item.id} name={item.name} selected onCanceld={() => onCanceld(item.id)}/>
        ))}
      </div>
      {itemList.length === 2 && (
        <button onClick={() => setMix(!mix)}>Mix</button>
      )}
      {mix && (
        <div>Result</div>
      )}
    </div>
  );
};
