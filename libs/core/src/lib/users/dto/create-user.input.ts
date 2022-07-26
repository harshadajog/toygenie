import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {

  @Field()
  first_name: string;

  @Field()
  last_name: string;
  
  @Field()
  email_address: string;

  @Field()
  password: string;
  
  @Field({ defaultValue: 'USER'})
  roles: string;

  @Field()
  auth_type: string;

  // @Field()
  // token: string;
}
