import { InputType, Int, Field } from '@nestjs/graphql'
import { ChatMessage } from '../entities/chat-message.entity';
import { CreateChatMessageInput } from './create-chatmessage.input';

@InputType()
export class CreateConversationInput {
    @Field()
    user_id1: number;

    @Field()
    user_id2: number;

    @Field()
    created_at: Date;

    @Field(type => [CreateChatMessageInput])
    messages: CreateChatMessageInput [];
}