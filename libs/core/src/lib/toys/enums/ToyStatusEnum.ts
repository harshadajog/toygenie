import { registerEnumType } from "@nestjs/graphql";

export enum ToyStatusEnum {
    ACTIVE,
    PENDING,
    DISAPPROVED,
    EXPIRED,
    SOLD
}

registerEnumType(ToyStatusEnum, {
    name: "ToyStatusEnum", // this one is mandatory
    description: "Sale status for the toy", // this one is optional
});