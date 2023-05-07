import React from "react"
import { Text, TextProps } from "@chakra-ui/react"
import { RarityType } from "@/types/RarityTypes"
import RarityColor from "@/constants/RarityColor"

const ItemName: React.FC<{
  name: string
  rarity: RarityType
  style?: TextProps
}> = ({ name, rarity, style }) => {
  return (
    <Text {...style} color={RarityColor[rarity]}>{name}</Text>
  );
};

export default ItemName;