import React from 'react';
import { ExperimantalTable, Item } from './components';
import './App.css';

export interface ListItem {
  id: string;
  name: string;
};

const LIST: ListItem[] = [
  {
    id: 'dkr45',
    name: 'item1',
  }, 
  {
    id: 'dkt775',
    name: 'item2',
  },
  {
    id: 'aad55',
    name: 'item3',
  },
  {
    id: 'dth90',
    name: 'item4',
  },
  {
    id: '00fgt',
    name: 'item5',
  },
  {
    id: 'BNM51',
    name: 'item6',
  },
  {
    id: '1dfh8',
    name: 'item7',
  },
  {
    id: 'Asdt6',
    name: 'item8',
  }
];

function App() {
  const [dragedItemId, setDragedItemId] = React.useState<string>();
  const [experimentalItemList, setExperimentalItemList] = React.useState<ListItem[]>([]);

  const dragStart = (e: React.DragEvent<HTMLDivElement>, id: string) => {
    setDragedItemId(id);
  };

  const handleDrop = () => {
    const newItem = LIST.find(item => item.id === dragedItemId);
    if (newItem) {
      setExperimentalItemList(prevValue => ([
        ...prevValue, 
        ...[newItem],
      ]))
    }
  };

  const handleUnselect = (id: string) => {
    const itemForRemove = experimentalItemList.findIndex(item => item.id === id);
    const array = [...experimentalItemList];
    array.splice(itemForRemove, 1);
    setExperimentalItemList(array);
  };

  return (
    <div className="App">
      <h2>Drag and Drop app!</h2>
      <div className='items-list'>
        {LIST.map(item => (
          <Item
            key={item.id}
            name={item.name}
            selected={experimentalItemList.find(experimentItem => experimentItem.id === item.id) ? true : false}
            onDrag={(e) => dragStart(e, item.id)}
          />
        ))}
      </div>
      <ExperimantalTable itemList={experimentalItemList} onDrop={handleDrop} onCanceld={handleUnselect}/>
    </div>
  );
}

export default App;
