import { FC, useEffect } from 'react';
import { connect } from 'react-redux';

import { getMe, IAuthState } from '../../redux/reducers/authReducer';
import { RootState } from '../../redux/reduxStore';
import { Header } from './Header';

type PropsType = {
  state: IAuthState;
  getMe: () => void;
}

const HeaderWithSideEffects: FC<PropsType> = ({ state, getMe }) => {

  useEffect(() => {
    getMe()
  }, [])

  return <Header state={state} />
}

export const ConnectedHeader: FC = () => {
  const mapState = (state: RootState) => ({
    state: state.auth
  });
  const mapDispatch = {
    getMe
  };
  const ConnectedElement = connect(mapState, mapDispatch)(HeaderWithSideEffects)
  return <ConnectedElement />
}