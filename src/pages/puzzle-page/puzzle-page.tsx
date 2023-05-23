import React from 'react';
import { PUZZLE } from '../../data/puzzle';
import { Difficulty, DifficultyLevel, Message, PuzzlePiece } from '../../components';
import dome from '../../assets/puzzle/dome.jpg';
import forest from '../../assets/puzzle/skog.jpg';
import mask from '../../assets/puzzle/wp.jpg';
import './puzzle-page.css';

const randomSort = (array: string[]) => {
  const unSortedArray = [...array]
  unSortedArray.sort(() => {
    return Math.random() - .1;
  });
  return unSortedArray;
};

export const Puzzle = () => {
  const dragItem = React.useRef<any>(null);
  const dragOverItem = React.useRef<any>(null);

  const [puzzleList, setPuzzleList] = React.useState(randomSort(PUZZLE));
  const [win, setWin] = React.useState(false);
  const [difficulty, setDifficulty] = React.useState<DifficultyLevel>();


  const handleSort = (e:React.DragEvent<HTMLElement>) => {
    const rowList = [...puzzleList];
    const draggedItem = rowList[dragItem.current];
    const draggedOverItem = rowList[dragOverItem.current];

    rowList.splice(dragItem.current, 1, draggedOverItem);
    rowList.splice(dragOverItem.current, 1, draggedItem);

    setPuzzleList(rowList);
    console.log(rowList);
    setWin(compareArrays(rowList, PUZZLE));
  };

  const compareArrays = (arrayA: string[], arrayB: string[]) => {
    return arrayA.every((item, index) => item === arrayB[index]);
  };

  const getOriginalPicture = () => {
    if (difficulty === 'puzzle-forest') {
      return forest;
    } else if (difficulty === 'puzzle-mask') {
      return mask;
    } else return dome;
  };

  return (
    <div className='puzzle-page'>
      <h2 className='puzzle-page__title'>Puzzle</h2>
      <a className='puzzle-page__link' href='/'>Back home</a>
      <Difficulty onClick={setDifficulty} />
      {difficulty && (
        <div className='puzzle-pages__wrapper'>
          <img className='puzzle-page__original-img' src={getOriginalPicture()} alt='Original' />
          <div className='puzzle-images__wrapper'>
            {puzzleList.map((image, index) => (
              <PuzzlePiece
                key={index}
                image={image}
                sourceFile={difficulty}
                onDragStart={(e) => dragItem.current = index}
                onDragEnter={(e) => dragOverItem.current = index}
                onDragOver={(e) => e.preventDefault()}
                onDragEnd={handleSort}
              />
            ))}
          </div>
        </div>
      )}
      {win && (
        <Message 
          message={['Congratulations!', 'You put the whole picture together.']}
          onClose={() => setWin(false)}
        />
      )}
    </div>
  );
};
