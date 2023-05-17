import React from 'react';
import { ExperimantalTable, Item, Message } from './components';
import { CLEANING_PRODUCTS } from './data/data';
import './App.css';

export interface ListItem {
  id: string;
  name: string;
  image: string;
};

const DATA = [...CLEANING_PRODUCTS];

function App() {
  const [dragedItemId, setDragedItemId] = React.useState<string>();
  const [experimentalItemList, setExperimentalItemList] = React.useState<ListItem[]>([]);
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

  const getReaction = () => {
    console.log('reaction is: ');
  };

  return (
    <div className="App">
      <h2>Drag and Drop app!</h2>
      <div className='items-list'>
        {DATA.map(item => (
          <Item
            key={item.id}
            name={item.name}
            image={item.image}
            selected={experimentalItemList.find(experimentItem => experimentItem.id === item.id) ? true : false}
            onDrag={(e) => dragStart(item.id)}
          />
        ))}
      </div>
      {message && message.length > 0 && (
        <Message message={message} onClose={() => setMessage([])} />
      )}
      <ExperimantalTable
        itemList={experimentalItemList}
        onDrop={handleDrop}
        onCanceld={handleUnselect}
        onMix={getReaction}
      />
    </div>
  );
}

export default App;
