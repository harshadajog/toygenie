import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class LoginUserInput {
    @Field()
    email_address: string;

    @Field()
    password: string;
}