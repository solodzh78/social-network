import { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addPostAC, changePostTextAC, getUserProfile, ProfileStateType } from '../../../redux/reducers/profileReducer';
import { RootState } from '../../../redux/reduxStore';
import { Profile } from './Profile';

type PropsType = {
  state: ProfileStateType;
  isAuth: boolean;
  newPostTextChangeHandler: (text: string) => void;
  addPostHandler: () => void;
  getUserProfile: (userId: string | undefined) => void;
}

const HeaderWithSideEffects: FC<PropsType> = (
  { state, isAuth, getUserProfile, addPostHandler, newPostTextChangeHandler }) => {

  const {userId} = useParams();

  useEffect(() => {
    getUserProfile(userId)
    document.title = 'Profile';
  }, [])

  const props = { state, addPostHandler, newPostTextChangeHandler }

  return <Profile {...props} />
}

export const ConnectedProfile: FC = () => {

  const mapState = (state: RootState) => ({
    state: state.profilePage,
    isAuth: state.auth.isAuth
  });
  const mapDispatch = {
    addPostHandler: addPostAC,
    newPostTextChangeHandler: changePostTextAC,
    getUserProfile
  }

  const ConnectedElement =  connect(mapState, mapDispatch)(HeaderWithSideEffects);

  return <ConnectedElement />
}
