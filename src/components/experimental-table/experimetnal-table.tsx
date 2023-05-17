import React from 'react';
import './experimental-table.css';
import { Item } from '../item';
import { REACTIONS, ReasultCard } from '../result-card';
import { CleaningProducts } from '../../data/data';

interface ExperimentalTableProps {
  itemList: CleaningProducts[];
  onDrop: () => void;
  onCanceld: (id: string) => void;
  onClose: () => void;
  onMix: () => REACTIONS;
};

export const ExperimantalTable: React.FC<ExperimentalTableProps> = ({
  itemList,
  onDrop,
  onCanceld,
  onClose,
  onMix
}) => {
  const [dragEntered, setDragEntered] = React.useState(false);
  const [mix, setMix] = React.useState(false);
  const [reaction, setReaction] = React.useState<REACTIONS>('neutral');

  const handelDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log('droped');
  };

  const handleDrop = () => {
    onDrop();
    setDragEntered(false);
  };

  const handeleMix = () => {
    setReaction(onMix());
    setMix(!mix);
  };

  const handleClose = () => {
    setMix(!mix);
    onClose();
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
        <button className='experimental-table__button' onClick={handeleMix}>Mix</button>
      )}
      {mix && (
        <ReasultCard reaction={reaction} onClose={handleClose} />
      )}
    </div>
  );
};
