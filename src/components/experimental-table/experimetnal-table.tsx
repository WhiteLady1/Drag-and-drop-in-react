import React from 'react';
import { Sample } from '../sample/sample';
import { ReasultCard } from '../result-card';
import { CleaningProducts, ReactionsData } from '../../data/experimental-data';
import './experimental-table.css';

interface ExperimentalTableProps {
  itemList: CleaningProducts[];
  reaction: ReactionsData;
  onDrop: () => void;
  onCanceld: (id: string) => void;
  onClose: () => void;
  onMix: () => void;
};

export const ExperimantalTable: React.FC<ExperimentalTableProps> = ({
  itemList,
  reaction,
  onDrop,
  onCanceld,
  onClose,
  onMix,
}) => {
  const [dragEntered, setDragEntered] = React.useState(false);
  const [mix, setMix] = React.useState(false);

  const handelDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = () => {
    onDrop();
    setDragEntered(false);
  };

  const handeleMix = () => {
    onMix();
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
          <Sample
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
