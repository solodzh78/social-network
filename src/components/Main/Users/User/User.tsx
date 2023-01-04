import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { IUser } from '../../../../api/api';

import defaultUserImg from '../../../../assets/image/user.svg';

import s from './User.module.scss';

type propsType = {
  user: IUser;
  disabledFollowButtons: number[];
  followUser: (id: number) => void;
  unfollowUser: (id: number) => void;
}

export const User: FC<propsType> = (
  { user: { id, name, photos, status, followed }, 
    followUser, unfollowUser, disabledFollowButtons}) => {
  return (
    <div className={s.main}>
      <div className={s.avatar}>
        <div className={s.imageContainer}>
          <NavLink to={`/profile/${id}`}>
            <img className={photos.small ? s.image : s.image_default} src={photos.small ? photos.small : defaultUserImg} alt="user image" />
          </NavLink>
        </div>
        <button 
          className={s.button} 
          disabled={disabledFollowButtons.some(item => item === id)}
          onClick={followed ? ((e) => unfollowUser(id)) : ((e) => followUser(id))}
        >
          {followed ? 'Unfollow' : 'Follow'}
        </button>
      </div>
      <div className={s.text}>
        <div className={s.top}>
          <div className={s.user_name}>{name}</div>
          <div className={s.adress}>
            <div>{'adress.country'}</div>
            <div>{'adress.city'}</div>
          </div>
        </div>
        <div className={s.bottom}>{status}</div>
      </div>
    </div>
  )
}
