import React, { useEffect } from 'react';
import AvailableChats from '../components/AvailableChats';
import ChatSearch from '../components/ChatSearch';
import JoinedChats from '../components/JoinedChats';
import ViewTitle from '../components/shared/ViewTitle';
import BaseLayout from '../layouts/Base';

import { useDispatch, useSelector } from 'react-redux';

import { fetchChats } from '../actions/chats';

export default function Home() {
  const dispatch = useDispatch();
  const chats = useSelector(({ chats }) => chats.items)

  useEffect(() => {
    dispatch(fetchChats())
  }, [dispatch])

  return (
    <BaseLayout>
      <div className="row no-gutters fh">
        <div className="col-3 fh">
          <ChatSearch />
          <JoinedChats chats={chats} />
        </div>
        <div className="col-9 fh">
          <ViewTitle text={'Welcome User!'} />
          <AvailableChats chats={chats} />
        </div>
      </div>
    </BaseLayout>
  )
}