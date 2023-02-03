import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const navigate = useNavigate();
  const message = useSelector(state => state.message)
  
  return (
    <div className="chat-navbar">
      <nav className="chat-navbar-inner">
        <div className="chat-navbar-inner-left">
          <button
            onClick={() => navigate(-1)}
            className='btn btn-outline-primary'>&#60;</button>
          <button
            onClick={() => navigate('/')}
            className='btn btn-outline-primary'>Home</button>
          <button
            onClick={() => navigate('/settings')}
            className="btn btn-outline-success ml-2">Settings</button>
          {message}
        </div>
        <div className="chat-navbar-inner-right">
          <span className="logged-in-user">Hi User</span>
          <button
            onClick={() => navigate('/register')}
            className="btn btn-outline-danger ml-2">Logout</button>
          <button
            onClick={() => navigate('/login')}
            className="btn btn-outline-success ml-2">Login</button>
        </div>
      </nav>
    </div>
  )
}