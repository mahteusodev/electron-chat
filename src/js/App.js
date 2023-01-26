import React from 'react';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Settings from './views/Settings';
import Login from './views/Login';
import Register from './views/Register';

import {
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

export default function App() {

  return (
    <Router>
      <Navbar />
      <div className='content-wrapper'>
        <Routes>
          <Route path='/settings' element={<Settings />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}