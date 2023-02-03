import React from 'react';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Settings from './views/Settings';
import Login from './views/Login';
import Register from './views/Register';
import Chat from './views/Chat';
import configureStore from './store';

import {
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

const store = configureStore();

export default function App() {

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className='content-wrapper'>
          <Routes>
            <Route path='/settings' element={<Settings />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/chat/:id' element={<Chat />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  )
}