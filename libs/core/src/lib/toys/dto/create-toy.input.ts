import { InputType, Int, Field } from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';
import { AgeRangeEnum } from '../enums/AgeRangeEnum';
import { BrandEnum } from '../enums/BrandEnum';
import { ConditionEnum } from '../enums/ConditionEnum';

@InputType()
export class CreateToyInput {
  @Field()
  @MaxLength(60)
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

  @Field()
  author: number;
}
