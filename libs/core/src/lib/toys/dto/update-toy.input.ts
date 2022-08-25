import { CreateToyInput } from './create-toy.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';
import { BrandEnum } from '../enums/BrandEnum';
import { AgeRangeEnum } from '../enums/AgeRangeEnum';
import { ConditionEnum } from '../enums/ConditionEnum';
import { ToyStatusEnum } from '../enums/ToyStatusEnum';

@InputType()
export class UpdateToyInput extends PartialType(CreateToyInput) {
  @Field(type => ID)
  id: number;

  @Field(() => ToyStatusEnum)
  saleStatus: ToyStatusEnum;
}
