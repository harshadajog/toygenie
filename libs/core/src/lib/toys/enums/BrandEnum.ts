import { registerEnumType } from "@nestjs/graphql";
export enum BrandEnum {
    BARBIE,
    DISNEY,
    FISHER_PRICE,
    HARRY_POTTER,
    HASBRO,
    HOT_WHEELS,
    MY_LITTLE_PONY,
    LEGO,
    LIGHTYEAR,
    MARVEL,
    MELISSA_AND_DOUG,
    PAW_PATROL,
    STAR_WARS,
    OTHER
}

registerEnumType(BrandEnum, {
    name: "BrandEnum", // this one is mandatory
    description: "Popular brand names for toys", // this one is optional
  });