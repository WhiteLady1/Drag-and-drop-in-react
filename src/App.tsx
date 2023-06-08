import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { isMobile, isTablet } from 'react-device-detect';
import { Experiment, Puzzle, Home } from './pages';
import { DEVICES } from './components';
import './App.scss';

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


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='experiment'
          element={
            <DnDContext.Provider value={{device: getDevice(), user: {name: 'Adam', points: 5}}}>
              <Experiment />
            </DnDContext.Provider>
          }
        />
        <Route
          path='puzzle'
          element={
            <DnDContext.Provider value={{device: getDevice(), user: {name: 'Adam', points: 5}}}>
              <Puzzle />
            </DnDContext.Provider>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
