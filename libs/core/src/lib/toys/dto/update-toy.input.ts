import { CreateToyInput } from './create-toy.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';
import { BrandEnum } from '../enums/BrandEnum';
import { AgeRangeEnum } from '../enums/AgeRangeEnum';
import { ConditionEnum } from '../enums/ConditionEnum';

@InputType()
export class UpdateToyInput extends PartialType(CreateToyInput) {
  @Field(type => ID)
  id: number;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  category: string;

  @Field()
  subCategory: string;

  @Field()
  image: string;

  @Field()
  listPrice: number;

  @Field(type => BrandEnum)
  brand: BrandEnum;

  @Field(type => AgeRangeEnum)
  ageRange: AgeRangeEnum;

  @Field(type => ConditionEnum)
  condition: ConditionEnum;

  @Field()
  location: string;

  @Field()
  referenceURL: string;

  @Field()
  published: boolean;
}
