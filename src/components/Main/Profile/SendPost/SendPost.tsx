import React, {  FC } from 'react'

import s from './SendPost.module.scss';

type propsType = {
  newPostText: string;
  newPostTextChangeHandler: (text: string)=> void;
  addPostHandler: () => void;
}

export const SendPost: FC<propsType> = ({newPostText, addPostHandler, newPostTextChangeHandler}) => {

  return (

    <div className={s.main}>
      <textarea
        className={s.text_area}
        rows={4}
        cols={50}
        value={newPostText}
        onChange={e => newPostTextChangeHandler(e.target.value)} />
      <button
        className={s.send_button}
        onClick={addPostHandler}>
        Send Post
      </button>
    </div>
  )
}
