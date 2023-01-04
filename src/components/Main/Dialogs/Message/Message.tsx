import React, { FC } from 'react';
import userImg from '../../../../assets/image/user.svg'
import s from './Message.module.scss';

type propsType = {
  message: string;
}

export const Message: FC<propsType> = ({message}) => {
  return (
    <div className={s.main}>
      <div className={s.avatar}>
        <img src={userImg} alt="user image" />
        <div className={s.user_name}>Dmitry</div>
      </div>
      <div className={s.text}>
        <span>
          {message}
        </span>
      </div>
    </div>
  )
}
