import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType({ description: 'user ' })
export class User {
  @Field(type => Int )
  id: number;

  @Field()
  first_name: string;

  @Field()
  last_name: string;

  @Field()
  email_address: string;

  // IMPORTANT!!! Do NOT ADD PASSWORD HERE. IT WILL BE DISPLAYED IN QUERY USER OUTPUT.
  // @Field()
  // password: string;

  @Field({ defaultValue: 'USER'})
  roles: string;

  @Field()
  auth_type: string;

  // @Field()
  // token: string;
}