import React from 'react';
import './App.css';
import { ExperimantalTable, Item } from './components';

const list = [
  {
    id: 'dkr45',
    name: 'item1',
  },  {
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
  const [experimentalItemList, setExperimentalItemList] = React.useState([]);

  const dragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    console.log('onDrag run', index);
    console.log(e.target);
  };

  return (
    <div className="App">
      <h2>Drag and Drop app!</h2>
      <div className='items-list'>
        {list.map((item, index) => (
          <Item key={item.id} name={item.name} onDrag={(e) => dragStart(e, index)}/>
        ))}
      </div>
      <ExperimantalTable itemList={experimentalItemList}/>
    </div>
  );
}

export default App;
