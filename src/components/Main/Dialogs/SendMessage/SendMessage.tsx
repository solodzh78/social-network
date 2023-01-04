import React, { ChangeEvent, FC } from 'react'

import { addMessageActionCreator, changeMessageTextActionCreator } from '../../../../redux/reducers/dialogsReducer';
import { dispatch } from '../../../../redux/reduxStore';
// import { dispatch } from '../../../../redux/store';

import s from './SendMessage.module.scss';

type propsType = {
  newMessageText: string;
}

export const SendMessage: FC<propsType> = ({newMessageText}) => {

  const onAddPost = () => dispatch(addMessageActionCreator());

  const onChangeNewMessageTextHandler = ({target: {value}}: ChangeEvent<HTMLTextAreaElement>) => 
  dispatch(changeMessageTextActionCreator(value))

  return (

    <div className={s.main}>
      <textarea
        className={s.text_area}
        rows={4}
        cols={50}
        value={newMessageText}
        onChange={onChangeNewMessageTextHandler} />
      <button
        className={s.send_button}
        onClick={onAddPost}>
        Send Post
      </button>
    </div>
  )
}
