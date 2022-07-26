import { registerEnumType } from "@nestjs/graphql";

export enum ConditionEnum {
    NEW,
    USED_LIKE_NEW,
    USED_VERY_GOOD,
    USED_GOOD,
    USED_ACCEPTABLE
}

registerEnumType(ConditionEnum, {
    name: "ConditionEnum", // this one is mandatory
    description: "Condition values for toys", // this one is optional
  });

/*
New:
Just like it sounds. A brand-new item. Original manufacturer's warranty, if any, still applies. Original packaging is present for most New items.

Used - Like New or Open Box:
An item in perfect working condition. Original protective wrapping may be missing, but the original packaging is intact and in good condition with minor damage possible. Instructions are included.

Used - Very Good:
A well-cared-for item that has seen limited use and remains in good working condition. The item may show some limited signs of wear with small scratches or cosmetic blemishes. Item may arrive with damaged packaging or be repackaged and could be missing some accessories. Missing accessories are clearly defined for each item.

Used - Good:
The item shows wear from consistent use, but it remains in good condition and functions properly. Item may arrive with damaged packaging or be repackaged. It may be marked, have identifying markings on it, or have minor cosmetic damage. It may also be missing some parts or accessories such as screws (in the case of furniture) or an instruction manual.

Used - Acceptable:
The item is fairly worn but continues to function properly. Item may arrive with damaged packaging or be repackaged. Signs of wear can include aesthetic issues such as scratches, dents, and worn corners. The item may have identifying markings on it or show other signs of previous use. Item may be missing some parts or accessories such as screws (in the case of furniture) or a mouse or USB cable (in the case of a laptop).
*/