import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React, {useEffect} from 'react';
import { Toolbar, Container } from '@mui/material';
import shave from 'shave';
import dummy from '../../../assets/unsplash1.jpg';

import './ConversationListItem.css';
import { Messaging } from '@toygenie/graphql-access';

export default function ConversationListItem({conversation}: { conversation: Messaging}) {

    return (
      <>
       <Toolbar />
       <Container>
      <h1> Conversation List item</h1>
      {/* <div className="conversation-list-item">
        <img className="conversation-photo" src={dummy} alt="conversation" />
        <div className="conversation-info">
          <h1 className="conversation-title">{ conversation.subject }</h1>
          <p className="conversation-snippet">{ conversation.messageBody}</p>
        </div>
      </div> */}
      </Container>
      </>
    );
}