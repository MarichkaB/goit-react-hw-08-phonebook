import React from 'react';
import { NavLink } from 'react-router-dom';
import { RiUserAddLine } from 'react-icons/ri';
import { RiUserSharedLine } from 'react-icons/ri';
import s from './authNav.module.css';

const getActiveClassName = ({ isActive }) => {
  return isActive ? `${s.item} ${s.active}` : s.item;
};

const AuthNav = () => {
  return (
    <div className={s.box}>
      <NavLink className={getActiveClassName} to="/register">
        <RiUserAddLine size={20} /> Register
      </NavLink>
      <NavLink className={getActiveClassName} to="/login">
        <RiUserSharedLine size={20} /> Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
