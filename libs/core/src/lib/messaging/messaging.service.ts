import { Injectable } from '@nestjs/common'
import { readFileSync, writeFileSync } from 'fs';
import { CreateMessagingInput } from './dto/create-messaging.input'

@Injectable()
export class MessagingService {
  private messages = JSON.parse(readFileSync(__dirname + '/assets/messaging-data.json', 'utf8'));
  private recipientData = JSON.parse(readFileSync(__dirname + '/assets/message-recipient-data.json', 'utf8'));
  async create(createMessagingInput: CreateMessagingInput) {
    const newId = this.messages.length + 1;
    const newMessage = {
      ...createMessagingInput,
      id: newId
    }

    this.messages.push(newMessage);
    const newRecipientData = {
      id: newId,
      message_id: newId,
      creator_id: createMessagingInput.creator_id,
      recipient_id: createMessagingInput.recipient_id,
      is_read: createMessagingInput.is_read 
    }
    this.recipientData.push(newMessage);

    writeFileSync(__dirname + '/assets/messaging-data.json', JSON.stringify(this.messages));
    writeFileSync(__dirname + '/assets/message-recipient-data.json', JSON.stringify(this.recipientData));
    console.log(this.messages);
    console.log("[Message Service]: New message Created: ", newMessage);
    return newMessage;
  }

  async findAll() {
    return this.messages;
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
