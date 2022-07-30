import { registerEnumType } from "@nestjs/graphql";

export enum AgeRangeEnum {
    NEWBORN,
    INFANT,
    TODDLER,
    PRE_SCHOOLER,
    MIDDLE_SCHOOLER,
    YOUNG_TEEN,
    TEEN,
    ADULT,
    ANY
}

registerEnumType(AgeRangeEnum, {
    name: "AgeRangeEnum", // this one is mandatory
    description: "Age Ranges", // this one is optional
  });

/* 
    NEWBORN - 0-3months
    INFANT - 
    TODDLER - 
    MIDDLECHILDHOOD - 6-12
    YOUNGTEENS - 12-14,
    TEENS - 15-17,
    ADULT: 18
    */