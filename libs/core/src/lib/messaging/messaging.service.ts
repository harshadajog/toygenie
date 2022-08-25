import { Injectable } from '@nestjs/common'
import { readFileSync, writeFileSync } from 'fs';
import { CreateMessagingInput } from './dto/create-messaging.input';
import { CreateChatMessageInput } from './dto/create-chatmessage.input';
import { CreateConversationInput } from './dto/create-conversation.input'
import { ChatMessage } from './entities/chat-message.entity';
import { Messaging } from './entities/messaging.entity';
import { UpdateConversationInput } from './dto/update-conversation.input';

@Injectable()
export class MessagingService {
  private messages = JSON.parse(readFileSync(__dirname + '/assets/messaging-data.json', 'utf8'));
  private recipientData = JSON.parse(readFileSync(__dirname + '/assets/message-recipient-data.json', 'utf8'));
  private conversations = JSON.parse(readFileSync(__dirname + '/assets/conversation-data.json', 'utf8'));
  
  async createMessage(createChatMessageInput: CreateChatMessageInput) {
    const newMessage = {
      ...createChatMessageInput,
    }
    return newMessage;
  }

  async createConversation(createConversationInput: CreateConversationInput) {
    const newId = this.conversations.length + 1;

    const newConversation = {
      ...createConversationInput,
      id: newId,
    }
    this.conversations.push(newConversation);
    writeFileSync(__dirname + '/assets/messaging-data.json', JSON.stringify(this.messages));
    const newMessage = createConversationInput.messages[0];
    this.messages.push(newMessage);
    const newRecipientData = {
      id: newId,
      message_id: newId,
      creator_id: newMessage.creator_id,
      recipient_id: newMessage.recipient_id,
      is_read: newMessage.is_read 
    }
    this.recipientData.push(newRecipientData);
    
    writeFileSync(__dirname + '/assets/message-recipient-data.json', JSON.stringify(this.recipientData));
    console.log(this.messages);
    console.log("[Message Service]: New message Created: ", newMessage);


    writeFileSync(__dirname + '/assets/conversation-data.json', JSON.stringify(this.conversations));
    return newConversation;
  }

  async updateConversation(updateConversationInput: UpdateConversationInput) {
    console.log("[Update Conversation Service:", updateConversationInput.messages[0]);
    let currConversations = this.conversations.filter((conv) => {
      return conv.id !== updateConversationInput.id
    });

    let conv = this.conversations.find((conv) => {
      return conv.id === updateConversationInput.id
    });
    let arr = conv.messages;

    arr.push(updateConversationInput.messages[0]);
    conv.messages = arr;

    currConversations.push(conv);
    this.conversations.push(currConversations);
    writeFileSync(__dirname + '/assets/conversation-data.json', JSON.stringify(this.conversations));
    return conv;
  }

  // async create(createMessagingInput: CreateMessagingInput) {
  //   const newId = this.messages.length + 1;
  //   const newMessage = {
  //     ...createMessagingInput,
  //     id: newId
  //   }

  //   this.messages.push(newMessage);
  //   const newRecipientData = {
  //     id: newId,
  //     message_id: newId,
  //     creator_id: createMessagingInput.creator_id,
  //     recipient_id: createMessagingInput.recipient_id,
  //     is_read: createMessagingInput.is_read 
  //   }
  //   this.recipientData.push(newRecipientData);

  //   writeFileSync(__dirname + '/assets/messaging-data.json', JSON.stringify(this.messages));
  //   writeFileSync(__dirname + '/assets/message-recipient-data.json', JSON.stringify(this.recipientData));
  //   console.log(this.messages);
  //   console.log("[Message Service]: New message Created: ", newMessage);
  //   return newMessage;
  // }

  async findAll() {
    return this.messages;
  }

  async findConversationId(userid1: number, userid2: number) {
    let current = this.conversations.find((conv) => { 
                    return (conv.user_id1 === userid1 && conv.user_id2 === userid2 || 
                            conv.user_id1 === userid2 && conv.user_id2 === userid1)});
    console.log("Hey" ,current);                        
                        
    if(!current) return -1;                
    return current.id;
  }

  async findConversation(userid1: number, userid2: number) {
    let current = this.conversations.find((conv) => { 
                    return (conv.user_id1 === userid1 && conv.user_id2 === userid2 || 
                            conv.user_id1 === userid2 && conv.user_id2 === userid1)});
    console.log("Hey" ,current);                        
    if(!current) return [];                                     
    return current;
  }

  async findMessagesReceivedByUser(recepient: number) {
    return this.messages.filter((message) => {return message.recipient_id == recepient});
  }

  async findUnreadMessagesReceivedByUser(recepient: number) {
    console.log("[Message Service][findUnreadMessagesReceivedByUser] ");
    return this.messages.filter((message) => {return (!message.is_read && message.recipient_id == recepient)});
  }

  findOne(id: number) {
    return `This action returns a #${id} messaging`
  }

  remove(id: number) {
    return `This action removes a #${id} messaging`
  }
}
