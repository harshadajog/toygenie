import { ObjectType, Field, Int } from '@nestjs/graphql'

@ObjectType()
export class Login {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}
