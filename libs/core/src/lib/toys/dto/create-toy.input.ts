import { InputType, Int, Field } from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';
import { AgeRangeEnum } from '../enums/AgeRangeEnum';
import { BrandEnum } from '../enums/BrandEnum';
import { ConditionEnum } from '../enums/ConditionEnum';
import { ToyStatusEnum } from '../enums/ToyStatusEnum';

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

  // @Field({nullable: true})
  // subCategory: string;

  // @Field({nullable: true})
  // image: string;

  @Field()
  listPrice: number;

  // @Field(type => BrandEnum)
  // brand: BrandEnum;

  // @Field(type => AgeRangeEnum)
  // ageRange: AgeRangeEnum;

  @Field(type => ConditionEnum)
  condition: ConditionEnum;

  // @Field({nullable: true})
  // location: string;

  // @Field({ nullable: true })
  // referenceURL: string;
  
  @Field()
  author: number;

  @Field(type => ToyStatusEnum)
  saleStatus: ToyStatusEnum;
}
