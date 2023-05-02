import { RarityType } from "./RarityTypes";

export type ItemCardType = {
    itemName: string;
    rarity: RarityType;
    price: number;
    attributes: {
        name: string;
        value: number
    }[];
};