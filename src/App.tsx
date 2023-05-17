import React from 'react';
import { ExperimantalTable, Item, Message, REACTIONS } from './components';
import { CLEANING_PRODUCTS, CleaningProducts } from './data/data';
import './App.css';

const DATA = [...CLEANING_PRODUCTS];

function App() {
  const [dragedItemId, setDragedItemId] = React.useState<string>();
  const [experimentalItemList, setExperimentalItemList] = React.useState<CleaningProducts[]>([]);
  const [message, setMessage] = React.useState<string[]>([]);

  const dragStart = (id: string) => {
    setDragedItemId(id);
  };

  const handleDrop = () => {
    if (experimentalItemList.length >= 2) {
      setMessage(['You have reached the maximum of the samples you have selected!','Continue mixing the samples or remove them from the experimental table.']);
      console.log(message)
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

  const mixExperimentalSamples = () :REACTIONS => {
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

  const cleanExperimentalTable = () => {
    setExperimentalItemList([]);
  };

  return (
    <div className="App">
      <h2>Drag and Drop app!</h2>
      <div className='experiment-wrapper'>
        {DATA.map((item, index) => (
          <div className={`experiment-sampel experiment-sampel${index}`}>
            <Item
              key={item.id}
              name={item.name}
              image={item.image}
              selected={experimentalItemList.find(experimentItem => experimentItem.id === item.id) ? true : false}
              onDrag={(e) => dragStart(item.id)}
            />
          </div>
        ))}
        <ExperimantalTable
          itemList={experimentalItemList}
          onDrop={handleDrop}
          onCanceld={handleUnselect}
          onClose={cleanExperimentalTable}
          onMix={mixExperimentalSamples}
        />
      </div>
      {message && message.length > 0 && (
        <Message message={message} onClose={() => setMessage([])} />
      )}
    </div>
  );
}

export default App;
