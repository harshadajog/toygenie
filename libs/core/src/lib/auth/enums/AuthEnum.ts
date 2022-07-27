import { registerEnumType } from "@nestjs/graphql";

export enum AuthEnum {
    LOCAL,
    GOOGLE
}

registerEnumType(AuthEnum, {
    name: "AuthEnum", // this one is mandatory
    description: "Auth types", // this one is optional
  });