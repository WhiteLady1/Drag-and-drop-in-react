import React from 'react';
import {
  Button,
  Difficulty,
  DifficultyLevel,
  Message,
  ModalImg,
  PuzzlePiece
} from '../../components/index';

import { PUZZLE } from '../../data/puzzle';
import dome from '../../assets/puzzle/dome.jpg';
import forest from '../../assets/puzzle/skog.jpg';
import mask from '../../assets/puzzle/wp.jpg';

import './puzzle.scss';
import { DnDContext } from '../../App';

const randomSort = (array: string[]) => {
  const unSortedArray = [...array]
  unSortedArray.sort(() => {
    return Math.random() - .1;
  });
  return unSortedArray;
};

export const Puzzle = () => {
  const dndData = React.useContext(DnDContext);
  const device = dndData?.device;
  const dragItem = React.useRef<any>(null);
  const dragOverItem = React.useRef<any>(null);

  const [puzzleList, setPuzzleList] = React.useState(randomSort(PUZZLE));
  const [win, setWin] = React.useState(false);
  const [difficulty, setDifficulty] = React.useState<DifficultyLevel>();
  const [openOriginalImg, setOpenOriginalImg] = React.useState(false);


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

  const getLevelColor = (level: DifficultyLevel | undefined) => {
    if (level === 'puzzle-mask') return 'puzzle-page puzzle-page--easy';
    if (level === 'puzzle-forest') return 'puzzle-page puzzle-page--medium';
    if (level === 'puzzle-sky') return 'puzzle-page puzzle-page--hard';
    return 'puzzle-page';
  };

  return (
    <div className={getLevelColor(difficulty)}>
      <h2 className='puzzle-page__title'>Puzzle</h2>
      <a className='puzzle-page__link' href='/'>Back home</a>
      <Difficulty selectedDificulty={difficulty} onClick={setDifficulty} />
      {device === 'isTablet' && (
        <div className='puzzle-page__content'>
          {difficulty && (
            <>
              <Button text='Open original img' bgColor={difficulty} onClick={() => setOpenOriginalImg(!openOriginalImg)} />
              {openOriginalImg && (
                <ModalImg imgSrc={getOriginalPicture()} onClose={() => setOpenOriginalImg(false)} />
              )}
              <div className='puzzle-page__images-wrapper'>
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
            </>
          )}
        </div>
      )}
      {device === 'isDesktop' && (
        <div className='puzzle-page__content puzzle-page__content--desktop'>
          {difficulty && (
            <div className='puzzle-page__content__wrapper'>
              <img className='puzzle-page__content__original-img' src={getOriginalPicture()} alt='Original' />
              <div className='puzzle-page__images-wrapper'>
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
        </div>
      )}
      {device === 'isMobile' && (
        <div className='puzzle-page__content'>
          <p>Puzzle is not available for mobile devices</p>
        </div>
      )}
      {win && (
        <Message 
          message={['Congratulations!', 'You put the whole picture together.']}
          onClose={() => setWin(false)}
        />
      )}
      {difficulty && (
        <p className='puzzle-page__hint'>Open the console for help</p>
      )}
    </div>
  );
};
