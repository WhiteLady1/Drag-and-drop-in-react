import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { isMobile, isTablet } from 'react-device-detect';
import App from './App';
import { Experiment, Puzzle } from './pages';

import './index.css';
import { DEVICES } from './components';

type DeviceContextType = DEVICES;
type UserContextType = {
  name: string,
  points: number,
};

type DnDContextType = {
  device: DeviceContextType,
  user: UserContextType,
};

const getDevice = (): DEVICES => {
  if (isMobile && isTablet) {
    return 'isTablet';
  }
  if (isMobile && isTablet === false) {
    return 'isMobile';
  }
  return 'isDesktop';
};

export const DnDContext = React.createContext<DnDContextType | null>(null);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'experiment',
    element: <DnDContext.Provider value={{device: getDevice(), user: {name: 'Adam', points: 5}}}>
      <Experiment />
    </DnDContext.Provider>,
  },
  {
    path: 'puzzle',
    element: <DnDContext.Provider value={{device: getDevice(), user: {name: 'Adam', points: 5}}}>
      <Puzzle />
    </DnDContext.Provider>,
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
