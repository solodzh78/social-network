import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { ConnectedDialogs } from './Dialogs/ConnectedDialogs';
import { ConnectedProfile } from './Profile/ConnectedProfile';
import { ConnectedUsers } from './Users/ConnectedUsers';
import { Login } from './Login/Login';

import s from './Main.module.scss';
import { PrivateRoute } from '../common';
import { MyRoutes } from './Routes';

export const Main: FC = () => {
  return (
    <main className={s.main}>
      <Routes>
        <Route path='profile/:userId' element={MyRoutes.Profile} />
        <Route path='profile' element={MyRoutes.Profile} />
        <Route path='messages/*' element={MyRoutes.Dialogs} />
        <Route path='users' element={MyRoutes.Users} />
        <Route path='login' element={<Login />} />
      </Routes>
    </main>
  )
}
