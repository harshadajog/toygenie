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
