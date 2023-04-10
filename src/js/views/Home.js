import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import AvailableChats from '../components/AvailableChats';
import ChatSearch from '../components/ChatSearch';
import JoinedChats from '../components/JoinedChats';
import ViewTitle from '../components/shared/ViewTitle';
import { withBaseLayout } from '../layouts/Base';


import { fetchChats } from '../actions/chats';
import Notification from '../utils/notifications';

function Home() {
  const dispatch = useDispatch();
  const chats = useSelector(({ chats }) => chats.items)

  useEffect(() => {
    Notification.setup();
    dispatch(fetchChats())
  }, [dispatch])

  return (
    <div className="row no-gutters fh">
      <div className="col-3 fh">
        <ChatSearch />
        <JoinedChats chats={chats} />
      </div>
      <div className="col-9 fh">
        <ViewTitle text={'Welcome User!'}>
          <Link className='btn btn-primary' to='/chatCreate'>Create Chat</Link>
        </ViewTitle>
        <AvailableChats chats={chats} />
      </div>
    </div>
  )
}

export default withBaseLayout(Home);