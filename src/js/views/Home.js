import React, { useEffect } from 'react';
import AvailableChats from '../components/AvailableChats';
import ChatSearch from '../components/ChatSearch';
import JoinedChats from '../components/JoinedChats';
import ViewTitle from '../components/shared/ViewTitle';

import { fetchChats } from '../api/chats';

export default function Home() {

  useEffect(() => {
    fetchChats();
  }, [])

  return (
      <div className="row no-gutters fh">
        <div className="col-3 fh">
          <ChatSearch />
          <JoinedChats />
        </div>
        <div className="col-9 fh">
          <ViewTitle text={'Welcome User!'}/>
          <AvailableChats />
        </div>
      </div>
  )
}