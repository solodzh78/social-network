import { FC, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { Message } from './Message/Message';
import { SendMessage } from './SendMessage/SendMessage';
import { DialogsStateType } from '../../../redux/reducers/dialogsReducer';

import s from './Dialogs.module.scss';

type propsType = {
  state: DialogsStateType;
}

export const Dialogs: FC<propsType> = ({state: { users, messages, newMessageText }}) => {

  const setClassName = ({ isActive}: {isActive:boolean}) => 
  `${isActive ? s.active : ''} ${s.navlink}`;

  useEffect(() => {
    document.title = 'Messages';
  }, [])

  return (
    <main className={s.main}>
      <div className={s.users}>
        <div className={s.title}>Dialogs</div>
        {users && users.map(user => 
        <NavLink 
          key={user.id} 
          to={String(user.id)}
          className={setClassName}
        >
          <div className={`${s.user}`}>{user.name}</div>
        </NavLink>)}
      </div>
      <div className={s.messages}>
        {messages && messages.map(message => 
        <Message key={message.id} message={message.message}/>)}
        <SendMessage newMessageText={newMessageText} />
      </div>
      
    </main>
  )
}
