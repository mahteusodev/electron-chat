import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Settings from './views/Settings';
import Welcome from './views/Welcome';
import Chat from './views/Chat';
import configureStore from './store';
import { listenToAuthChanges } from './actions/auth';

import {
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

const store = configureStore();

export default function App() {

  useEffect(() => {
    store.dispatch(listenToAuthChanges());
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className='content-wrapper'>
          <Routes>
            <Route path='/' exact element={<Welcome />} />
            <Route path='/home' element={<Home />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/chat/:id' element={<Chat />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  )
}