import React from 'react';
import { Task } from '../../components';
import { TODO_DATA } from '../../data/todo-list-data';
import './todo-page.scss';

export const ToDoPage = () => {
  const [data, setData] = React.useState([...TODO_DATA]);
  const draggedToDo = React.useRef<any>(null);
  const dropedToDo = React.useRef<any>(null);

  const updateDone = (id: string) => {
    setData(prevValue => prevValue.map(item => item.id === id ? {
      ...item,
      done: !item.done,
    } : item))
  };

  const handleSort = (e:React.DragEvent<HTMLDivElement>) => {
    const toDoList = [...data];
    const draggedItem = toDoList.splice(draggedToDo.current, 1)[0];
    toDoList.splice(dropedToDo.current, 0, draggedItem);

    draggedToDo.current = null;
    dropedToDo.current = null;

    setData(toDoList);
  };

  return (
    <div className='todo-page'>
      <h2 className='todo-page__title'>ToDo list</h2>
      <a className='todo-page__link' href='/'>Back home</a>
      <div className='todo-page__task-list'>
        {data.map((item, index) => (
          <Task
            key={item.id}
            text={item.itemName}
            done={item.done}
            onClick={() => updateDone(item.id)}
            onDragStart={(e) => draggedToDo.current = index}
            onDragEnter={(e) => dropedToDo.current = index}
            onDragOver={(e) => e.preventDefault()}
            onDragEnd={handleSort}
          />
        ))}
      </div>
    </div>
  );
};
