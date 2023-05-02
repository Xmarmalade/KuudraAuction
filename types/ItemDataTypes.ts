import { RarityType } from "./RarityTypes";

export type ItemDataType = {
    uuid: string;
    auctioneer: string;
    profile_id: string;
    start_unix: number;
    end_unix: number;
    item_name: string;
    item_id: string;
    item_lore_raw: string;
    rarity: RarityType;
    price: number;
    attributes: {
        name: string;
        value: number;
    }[];
    claimed: boolean;
    bin: boolean;
    highest_bid: number;
}