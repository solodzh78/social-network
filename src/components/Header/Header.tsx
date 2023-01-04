import { FC } from 'react';
import logo from '../../assets/image/logo.png';
import { IAuthState } from '../../redux/reducers/authReducer';
import s from './Header.module.scss';

type PropsType = {
  state: IAuthState
}

export const Header: FC<PropsType> = ({state: {isAuth, login}}) => {

  return (
    <header className={s.main}>
      <img src={logo} />
      <div className={s.login}>
        {isAuth ? login : 'Sign In'}
      </div>
    </header>
  )
}
