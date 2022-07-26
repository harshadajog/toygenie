import { registerEnumType } from "@nestjs/graphql";

export enum AgeRangeEnum {
    NEWBORN,
    INFANT,
    TODDLER,
    PRESCHOOLER,
    MIDDLECHILDHOOD,
    YOUNGTEEN,
    TEEN,
    ADULT
}

registerEnumType(AgeRangeEnum, {
    name: "AgeRangeEnum", // this one is mandatory
    description: "TPopular brand names for toys", // this one is optional
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