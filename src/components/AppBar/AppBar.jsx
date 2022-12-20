import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import { selectIsLoggedIn, selectToken } from 'redux/auth/authSelector';
import { Circles } from 'react-loader-spinner';
import s from './appBar.module.css';

const getActiveClassName = ({ isActive }) => {
  return isActive ? `${s.item} ${s.active}` : s.item;
};

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const tokenStatus = useSelector(selectToken);

  return (
    <header className={s.header}>
      <div className={s.header_navigation}>
        <span className={s.header_icon}></span>
        <NavLink className={getActiveClassName} end to="/">
          Phonebook
        </NavLink>
        {isLoggedIn && (
          <NavLink className={getActiveClassName} to="/contacts">
            Contacts
          </NavLink>
        )}
      </div>
      {tokenStatus ? (
        isLoggedIn ? (
          <UserMenu />
        ) : (
          <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        )
      ) : (
        <AuthNav />
      )}
    </header>
  );
};

export default AppBar;
