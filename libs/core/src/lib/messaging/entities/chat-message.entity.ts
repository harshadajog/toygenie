import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class ChatMessage {
  // @Field(type => ID)
  // id: number;

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
