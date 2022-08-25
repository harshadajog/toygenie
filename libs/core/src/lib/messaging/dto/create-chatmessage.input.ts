import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateChatMessageInput {
  @Field()
  subject: string;

  @Field()
  messageBody: string;

  @Field()
  creator_id: number;

  @Field()
  recipient_id: number;

  @Field()
  created_date: Date;

  @Field()
  is_read: boolean;
}
