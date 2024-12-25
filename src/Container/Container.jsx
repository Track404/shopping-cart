import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { CurrentUserContext } from '../CreateContext';

function Container() {
  const [clickCardName, setClickCardName] = useState([]);

  return (
    <>
      <Navbar clickCardName={clickCardName} />
      <CurrentUserContext.Provider value={{ clickCardName, setClickCardName }}>
        <Outlet />
      </CurrentUserContext.Provider>
    </>
  );
}

export default Container;
