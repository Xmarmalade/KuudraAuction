export const SBAttributes = [
    "Arachno",
    "Attack Speed",
    "Blazing",
    "Combo",
    "Elite",
    "Ender",
    "Ignition",
    "Life Recovery",
    "Mana Steal",
    "Midas Touch",
    "Undead",
    "Warrior",
    "Deadeye",
    "Arachno Resistance",
    "Blazing Resistance",
    "Breeze",
    "Dominance",
    "Ender Resistance",
    "Experience",
    "Fortitude",
    "Life Regeneration",
    "Lifeline",
    "Magic Find",
    "Mana Pool",
    "Mana Regeneration",
    "Vitality",
    "Speed",
    "Undead Resistance",
    "Veteran",
    "Blazing Fortune",
    "Fishing Experience",
    "Infection",
    "Double Hook",
    "Fisherman",
    "Fishing Speed",
    "Hunter",
    "Trophy Hunter"];

export const isValidAttribute = (attr: string | string[] | undefined) => {
    if (typeof attr === "undefined") return true;
    if ((typeof attr === "string" && !SBAttributes.includes(attr)) || typeof attr === 'object') return false;
    else return true;
};