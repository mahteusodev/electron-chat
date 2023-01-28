import React from 'react';
import AvailableChats from '../components/AvailableChats';
import ChatSearch from '../components/ChatSearch';
import JoinedChats from '../components/JoinedChats';
import ViewTitle from '../components/shared/ViewTitle';


export default function Home() {
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