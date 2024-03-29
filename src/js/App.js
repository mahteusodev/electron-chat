import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Home from './views/Home';
import Settings from './views/Settings';
import Welcome from './views/Welcome';
import Chat from './views/Chat';
import ChatCreate from './views/ChatCreate';
import StoreProvider from './store/StoreProvider';
import LoadingView from './components/shared/LoadingView';
import { listenToAuthChanges } from './actions/auth';
import { listenToConnectionChanges } from './actions/app';

import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

const ContentWrapper = ({ children }) => <div className='content-wrapper'>{children}</div>

function ChatApp() {
  const dispatch = useDispatch();
  const isChecking = useSelector(({ auth }) => auth.isChecking);
  const isOnline = useSelector(({ app }) => app.isOnline)

  useEffect(() => {
    const unsubFromAuth = dispatch(listenToAuthChanges());
    const unsubFromConnection = dispatch(listenToConnectionChanges());

    return function() {
      unsubFromAuth();
      unsubFromConnection();
    }

  }, [dispatch])

  if(!isOnline) {
    return <LoadingView message='Disconnected. Please reconnect to internet.' />
  }

  if (isChecking) {
    return (
      <LoadingView />
    )
  }

  function AuthRoute({ children }) {
    const user = useSelector(({ auth }) => auth.user);

    return user ? children : <Navigate to='/' />
  }

  return (
    <Router>
      <ContentWrapper>
        <Routes>
          <Route path='/' exact element={<Welcome />} />
          <Route path='/home' element={
            <AuthRoute>
              <Home />
            </AuthRoute>
          }
          />
          <Route path='/settings' element={
            <AuthRoute>
              <Settings />
            </AuthRoute>
          }
          />
          <Route path='/chatCreate' element={
            <AuthRoute>
              <ChatCreate />
            </AuthRoute>
          }
          />
          <Route path='/chat/:id' element={
            <AuthRoute>
              <Chat />
            </AuthRoute>
          }
          />
        </Routes>
      </ContentWrapper>
    </Router>
  )
}

export default function App() {
  return (
    <StoreProvider>
      <ChatApp />
    </StoreProvider>
  )
}