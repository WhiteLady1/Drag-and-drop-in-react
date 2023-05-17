import React from 'react';
import './experimental-table.css';
import { ListItem } from '../../App';
import { Item } from '../item';
import { ReasultCard } from '../result-card';

interface ExperimentalTableProps {
  itemList: ListItem[];
  onDrop: () => void;
  onCanceld: (id: string) => void;
  onMix: () => void;
};

export const ExperimantalTable: React.FC<ExperimentalTableProps> = ({
  itemList,
  onDrop,
  onCanceld,
  onMix
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

  const handeleMix = () => {
    setMix(!mix);
    onMix();
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
          <Item
            key={item.id}
            name={item.name}
            image={item.image}
            selected
            onCanceld={() => onCanceld(item.id)}
          />
        ))}
      </div>
      {itemList.length === 2 && (
        <button onClick={handeleMix}>Mix</button>
      )}
      {mix && (
        <ReasultCard reaction='' />
      )}
    </div>
  );
};
