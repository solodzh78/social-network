import React, { FC } from 'react';
import userImg from '../../../../assets/image/foto.png'
import s from './Post.module.scss';

type propsType = {
  text: string;
}

export const Post: FC<propsType> = ({text}) => {
  return (
    <div className={s.main}>
      <div className={s.avatar}>
        <img src={userImg} alt="user image" />
      </div>
      <div className={s.text}>
        <span>
          {text}
        </span>
      </div>
    </div>
  )
}
