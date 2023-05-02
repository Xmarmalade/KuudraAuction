import React from "react"
import { Text } from "@chakra-ui/react"
import { RarityType } from "@/types/RarityTypes"
import RarityColor from "@/constants/RarityColor"

const ItemName: React.FC<{
  name: string
  rarity: RarityType
}> = ({ name, rarity }) => {
  return (
    <Text color={RarityColor[rarity]}>{name}</Text>
  );
};

export default ItemName;