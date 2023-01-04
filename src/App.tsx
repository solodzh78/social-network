import React, { FC } from 'react';
import s from './App.module.scss';
import { ConnectedHeader } from './components/Header/ConnectedHeader';
import { Main } from './components/Main/Main';
import { NavBar } from './components/NavBar/NavBar';

type propsType = {

}

const App: FC<propsType> = (props) => {

  return (
    <div className={s.main}>
      <ConnectedHeader />
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
