import { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { GET_MESSAGES_BY_RECEPIENT } from '../../graphql/graphql';
import { Messaging } from '@toygenie/graphql-access';
import ConversationListItem from "./ConversationListItem";

import './ConversationList.css';

export default function ConversationList() {
    const [conversations, setConversations] = useState<Messaging[]>([]);
    let val = localStorage.getItem("USER")!;
    const loggedInUser = JSON.parse(val);
    const { loading, error: msgError, data: msgData } = useQuery(GET_MESSAGES_BY_RECEPIENT, {
        variables:{
            recepient: loggedInUser.id
        }
    })
    useEffect(() => {
        if(msgError)
            console.log(msgError);
        else if(msgData && msgData.findMessagesReceivedByUser)    
        {
            console.log(msgData.findMessagesReceivedByUser);
        }
    }, [msgData, msgError]);

    return (
        <div className="conversation-list">

        {msgData?.findMessagesReceivedByUser.map((conv: Messaging) => {
            <ConversationListItem conversation={conv}
            />    
        })}
        </div>
    );
}