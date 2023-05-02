export const SBKuudraItems = [
    "hoge",
    "fuga"
];

export const SBKuudraItemIDs = {
    "Terror Helmet": {
        id: "TERROR_HELMET",
        texture: "url for an image"
    }
}

export const isValidItem = (itemName: string | string[] | undefined) => {
    if (typeof itemName !== 'string') return false;
    if (!SBKuudraItems.includes(itemName)) return false;
};