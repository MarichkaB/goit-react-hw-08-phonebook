import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutThunk } from 'redux/auth/authOperations';
import { FaUserCircle } from 'react-icons/fa';
import { selectUserEmail } from 'redux/auth/authSelector';
import Button from 'react-bootstrap/Button';
import s from './userMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(selectUserEmail);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await dispatch(logoutThunk()).unwrap();
      navigate('/', { replace: true });
    } catch (error) {}
  };

  return (
    <div className={s.menu}>
      <span className={s.name}>
        <FaUserCircle size={22} /> {userEmail}
      </span>
      <Button
        onClick={handleLogout}
        variant="outline-success"
        type="submit"
        className={s.button_logout}
      >
        Logout
      </Button>
    </div>
  );
};

export default UserMenu;
