import { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { changePageAC, followUser, getUsers, IUsersState, unfollowUser } from '../../../redux/reducers/usersReducer';
import { RootState } from '../../../redux/reduxStore';
import { Users } from './Users';

type PropsType = {
  state: IUsersState;
  pageClickHandler: (page: number) => void;
  followUser: (id: number) => void;
  unfollowUser: (id: number) => void;
  getUsers: () => void;
}

const UsersWithSideEffects: FC<PropsType> = (
  { state, pageClickHandler, followUser, unfollowUser, getUsers}) => {

  useEffect(() => {
    getUsers()
  }, [state.currentPage]);

  const props = {state, pageClickHandler, followUser, unfollowUser}

  return <Users  {...props}/>
}

export const ConnectedUsers: FC = () => {

  const mapState = (state: RootState) => ({
    state: state.usersPage
  });
  const mapDispatch = {
    pageClickHandler: changePageAC,
    getUsers, followUser, unfollowUser
  }
  const ConnectedElement =  connect(mapState, mapDispatch)(UsersWithSideEffects);
  return <ConnectedElement />
}
