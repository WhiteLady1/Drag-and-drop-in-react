import React from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import {
  MobileExperiment,
  DEVICES,
  DesktopExperiment,
  TabletExperiment
} from '../../components';
import {
  CLEANING_PRODUCTS,
  CleaningProducts,
  REACTIONS_DATA,
  ReactionsData
} from '../../data/experimental-data';

import './experiment.scss';

const DATA = [...CLEANING_PRODUCTS];


export const Experiment = () => {
  const [device, setDevice] = React.useState<DEVICES>('isDesktop');
  const [dragedItemId, setDragedItemId] = React.useState<string>();
  const [experimentalItemList, setExperimentalItemList] = React.useState<CleaningProducts[]>([]);
  const [reaction, setReaction] = React.useState<ReactionsData>(REACTIONS_DATA[3]);
  const [message, setMessage] = React.useState<string[]>([]);

  const handleDragStart = (id: string) => {
    setDragedItemId(id);
  };

  const handleSelectSampel = (id: string) => {
    const newItem = DATA.find(item => item.id === id);
    if (newItem) {
      setExperimentalItemList(prevValue => ([
        ...prevValue, 
        ...[newItem],
      ]))
    }
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    const element = document.elementFromPoint(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
    if (element?.className.includes('experimental-table') && dragedItemId) {
      if (experimentalItemList.length >= 2) {
        setMessage([
          'You have reached the maximum of the samples you have selected!',
          'Continue mixing the samples or remove them from the experimental table.'
        ]);
      } else {
        const newItem = DATA.find(item => item.id === dragedItemId);
        if (newItem) {
          setExperimentalItemList(prevValue => ([
            ...prevValue, 
            ...[newItem],
          ]))
        }
      }
    }
  };

  const handleDrop = () => {
    if (experimentalItemList.length >= 2) {
      setMessage([
        'You have reached the maximum of the samples you have selected!',
        'Continue mixing the samples or remove them from the experimental table.'
      ]);
    } else {
      const newItem = DATA.find(item => item.id === dragedItemId);
      if (newItem) {
        setExperimentalItemList(prevValue => ([
          ...prevValue, 
          ...[newItem],
        ]))
      }
    }
  };

  const handleUnselect = (id: string) => {
    const itemForRemove = experimentalItemList.findIndex(item => item.id === id);
    const array = [...experimentalItemList];
    array.splice(itemForRemove, 1);
    setExperimentalItemList(array);
  };

  const handleTouchCancel = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragedItemId(undefined);
  };

  const mixExperimentalSamples = () => {
    if (experimentalItemList[0].reactions.corrosive.find(reaction => reaction === experimentalItemList[1].name)) {
      return 'corrosive';
    } else if (experimentalItemList[0].reactions.explosion.find(reaction => reaction === experimentalItemList[1].name)) {
      return 'explosion';
    } else if (experimentalItemList[0].reactions.poisonGas.find(reaction => reaction === experimentalItemList[1].name)) {
      return 'poison-gas';
    } else {
      return 'neutral';
    };
  };

  const getReaction = () => {
    console.log(experimentalItemList);
    const reaction = REACTIONS_DATA.find(item => item.id === mixExperimentalSamples())
    if (reaction) {
      setReaction(reaction);
    };
  };

  const cleanExperimentalTable = () => {
    setExperimentalItemList([]);
  };

  React.useEffect(() => {
    const getDevice = (): DEVICES => {
      if (isMobile && isTablet) {
        return 'isTablet';
      }
      if (isMobile && isTablet === false) {
        return 'isMobile';
      }
      return 'isDesktop';
    };
    setDevice(getDevice); 
  }, [device]);

  return (
    <div className="experiment">
      <h2>Chemical experiment</h2>
      <a className='experiment__link' href='/'>Home</a>
      <div className='experiment-wrapper'>
        {device === 'isMobile' && (
          <MobileExperiment
            samples={[...DATA.map(sampel => ({id: sampel.id, name: sampel.name}))]}
            itemList={experimentalItemList}
            reaction={reaction}
            onSelectSampel={handleSelectSampel}
            onRemoveSampel={handleUnselect}
            onCleanTable={cleanExperimentalTable}
            onMix={getReaction}
          />
        )}
        {device === 'isTablet' && (
          <TabletExperiment
            sampels={DATA}
            itemList={experimentalItemList}
            reaction={reaction}
            message={message}
            onTouchStart={handleDragStart}
            onTouchMove={(e) => console.log('move', e)}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchCancel}
            onRemoveSampel={handleUnselect}
            onCleanTable={cleanExperimentalTable}
            onMix={getReaction}
            onCloseMessage={() => setMessage([])}
          />
        )}
        {device === 'isDesktop' && (
          <DesktopExperiment
            sampels={DATA}
            itemList={experimentalItemList}
            reaction={reaction}
            message={message}
            onDragSampel={handleDragStart}
            onDropSampel={handleDrop}
            onRemoveSampel={handleUnselect}
            onCleanTable={cleanExperimentalTable}
            onCloseMessage={() => setMessage([])}
            onMix={getReaction}
          />
        )}
      </div>
    </div>
  );
};
