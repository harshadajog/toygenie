import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { CreateChatMessageInput } from '../dto/create-chatmessage.input';
import { ChatMessage } from './chat-message.entity';

@ObjectType()
export class Conversation {
  @Field(type => ID)
  id: number;

  @Field()
  user_id1: number;

  @Field()
  user_id2: number;

  @Field()
  created_at: Date;

  @Field(type => [ChatMessage])
  messages: ChatMessage[];
}
