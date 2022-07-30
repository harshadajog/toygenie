import { InputType, Field } from '@nestjs/graphql';
import {AuthEnum} from '../enums/AuthEnum';

@InputType()
export class LoginUserInput {
    @Field()
    email_address: string;

    @Field()
    password: string;

    @Field(type => AuthEnum)
    auth_type: AuthEnum;
}