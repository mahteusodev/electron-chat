import React from 'react';
import { useParams } from 'react-router-dom';
import ChatMessages from '../components/ChatMessages';
import ChatUserList from '../components/ChatUserList';
import ViewTitle from '../components/shared/ViewTitle';
import { withBaseLayout } from '../layouts/Base';

function Chat() {
  const { id } = useParams();
  return (
      <div className='content-wrapper'>
        <div className="row no-gutters fh">
          <div className="col-3 fh">
            <ChatUserList />
          </div>
          <div className="col-9 fh">
            <ViewTitle text={`Channel ${id}`} />
            <ChatMessages />
          </div>
        </div>
      </div>
  )
}

export default withBaseLayout(Chat);