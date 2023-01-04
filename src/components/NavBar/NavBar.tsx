import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import s from './NavBar.module.scss';

export const NavBar: FC = () => {
  const setClassName = ({ isActive}: {isActive:boolean}) => 
  `${isActive ? s.active : ''} ${s.navlink}`;
  
  return (
    <nav className={s.main}>
      <NavLink to='profile' className={setClassName}>
        <div className={s.item}>Profile</div>
      </NavLink>
      <NavLink to='messages' className={setClassName}>
        <div className={s.item}>Messages</div>
      </NavLink>
      <NavLink to='news' className={setClassName}>
        <div className={s.item}>News</div>
      </NavLink>
      <NavLink to='musik' className={setClassName}>
        <div className={s.item}>Music</div>
      </NavLink>
      <NavLink to='users' className={setClassName}>
        <div className={s.item}>Find users</div>
      </NavLink>
      <NavLink to='settings' className={setClassName}>
        <div className={`${s.item} ${s.settings}`}>Settings</div>
      </NavLink>
      <NavLink to='friends' className={setClassName}>
        <div className={`${s.item} ${s.friends}`}>Friends</div>
      </NavLink>
    </nav>
  )
}