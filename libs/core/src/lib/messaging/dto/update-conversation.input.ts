import { CreateConversationInput } from './create-conversation.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateChatMessageInput } from './create-chatmessage.input';

@InputType()
export class UpdateConversationInput extends PartialType(CreateConversationInput) {
    @Field(() => Int)
    id: number;

    @Field(type => [CreateChatMessageInput])
    messages: CreateChatMessageInput[];
}