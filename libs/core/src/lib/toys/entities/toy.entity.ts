import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { AgeRangeEnum } from '../enums/AgeRangeEnum';
import { BrandEnum } from '../enums/BrandEnum';
import { ConditionEnum } from '../enums/ConditionEnum';

@ObjectType()
export class Toy {
  @Field(type => ID)
  id: number;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  category: string;

  // @Field({nullable: true})
  // image: string;

  @Field()
  listPrice: number;

  @Field(type => BrandEnum)
  brand: BrandEnum;

  @Field(type => AgeRangeEnum)
  ageRange: AgeRangeEnum;

  @Field(type => ConditionEnum)
  condition: ConditionEnum;

  // @Field({nullable: true})
  // location: string;

  // @Field({ nullable: true })
  // referenceURL: string;

  @Field({defaultValue: true})
  published: boolean;

  @Field()
  author: number;

}
