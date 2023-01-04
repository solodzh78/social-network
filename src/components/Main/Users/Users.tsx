import { FC } from 'react';

import { User } from './User/User';
import { IUsersState } from '../../../redux/reducers/usersReducer';
import { Pagination } from './Pagination/Pagination';

import s from './Users.module.scss';
import { Preloader } from '../../common';

type propsType = {
  state: IUsersState;
  followUser: (id: number) => void;
  unfollowUser: (id: number) => void;
  pageClickHandler: (page: number) => void;
}

export const Users: FC<propsType> = (
  { state: { items, totalCount, pageSize, currentPage, isLoading, disabledFollowButtons },
    followUser, unfollowUser, pageClickHandler}) => {

  const pagesCount = Math.ceil(totalCount / pageSize);
  return (
    <main className={s.main}>
      <div className={s.users}>
        <div className={s.title}>Users</div>
        <Pagination pagesCount={pagesCount} currentPage={currentPage} pageClickHandler={pageClickHandler} />
        <div className={s.users_list}>
          {isLoading && <Preloader />}
          {items && items.map(user =>
            <User
              key={user.id}
              user={user}
              followUser={followUser}
              unfollowUser={unfollowUser}
              disabledFollowButtons={disabledFollowButtons}
            />)}
        </div>
      </div>
    </main>
  )
}
