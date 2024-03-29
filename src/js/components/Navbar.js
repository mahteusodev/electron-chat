import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../actions/auth';
import BackButton from './shared/BackButton';

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(({ auth }) => auth.user)

  return (
    <div className="chat-navbar">
      <nav className="chat-navbar-inner">
        <div className="chat-navbar-inner-left">
          <BackButton />
          <button
            onClick={() => navigate('/')}
            className='btn btn-outline-primary'>Home</button>
          <button
            onClick={() => navigate('/settings')}
            className="btn btn-outline-success ml-2">Settings</button>
        </div>
        <div className="chat-navbar-inner-right">
          {!user ?
            <button
              onClick={() => navigate('/')}
              className="btn btn-outline-success ml-2">Login</button>
            :
            <>
              <img className='avatar mr-2' src={user.avatar}></img>
              <span className="logged-in-user">Hi {user.username}</span>
              <button
                onClick={() => dispatch(logout())}
                className="btn btn-outline-danger ml-4">Logout</button>
            </>}
        </div>
      </nav>
    </div>
  )
}