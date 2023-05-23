import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import { ExperimentPage, ToDoPage } from './pages';

import './index.css';
import { Puzzle } from './pages/puzzle-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'experiment',
    element: <ExperimentPage />,
  },
  {
    path: 'todo-list',
    element: <ToDoPage />,
  },
  {
    path: 'puzzle',
    element: <Puzzle />,
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
