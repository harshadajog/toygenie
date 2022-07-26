import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';
import { CreateToyInput } from './create-toy.input';

@InputType()
export class DeleteToyInput extends PartialType(CreateToyInput) {
  @Field(type => ID)
  id: number;
}