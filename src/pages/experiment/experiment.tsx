import React from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import {
  MobileExperiment,
  DEVICES,
  DesktopExperiment,
  TabletExperiment,
  Message
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
  const [disabledMobileSelect, setDisabledMobileSelect] = React.useState(true);

  const handleDragStart = (id: string) => {
    setDragedItemId(id);
  };

  const handleSelectSampel = (sampleId: string, produckId: string) => {
    const list = [...experimentalItemList];
    const sampleIndex = sampleId === 'sample1' ? 0 : 1;
    const newItem = DATA.find(item => item.id === produckId);
    if (newItem) {
      if (list.length > 1) {
        list.splice(sampleIndex, 1, newItem);
        setExperimentalItemList(list);
      } else {
        setExperimentalItemList(prevValue => ([
          ...prevValue, 
          ...[newItem],
        ]));
        setDisabledMobileSelect(false);
      }
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
          ]));
          setDragedItemId(undefined);
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
        ]));
        setDragedItemId(undefined);
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
            disabledSecondSelect={disabledMobileSelect}
            onSelectSampel={handleSelectSampel}
            onRemoveSampel={handleUnselect}
            onCleanTable={cleanExperimentalTable}
            onMix={getReaction}
          />
        )}
        {device === 'isTablet' && (
          <TabletExperiment
            samples={DATA}
            itemList={experimentalItemList}
            reaction={reaction}
            onTouchStart={handleDragStart}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchCancel}
            onRemoveSampel={handleUnselect}
            onCleanTable={cleanExperimentalTable}
            onMix={getReaction}
          />
        )}
        {device === 'isDesktop' && (
          <DesktopExperiment
            samples={DATA}
            itemList={experimentalItemList}
            reaction={reaction}
            onDragSampel={handleDragStart}
            onDropSampel={handleDrop}
            onRemoveSampel={handleUnselect}
            onCleanTable={cleanExperimentalTable}
            onMix={getReaction}
          />
        )}
      </div>
        {message.length > 1 && (
          <Message message={message} onClose={() => setMessage([])} />
        )}
    </div>
  );
};
