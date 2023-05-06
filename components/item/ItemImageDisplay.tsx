import { Image, VStack, Text, Box, BoxProps } from "@chakra-ui/react";
import { SBKuudraItemType } from "@/types/KuudraItemTypes";
import { RarityType } from "@/types/RarityTypes";
import RarityColor from "@/constants/RarityColor";


const ItemImageDisplay: React.FC<{
  itemName: SBKuudraItemType
  rarity: RarityType
  url: string
  style?: BoxProps
}> = ({ itemName, rarity, url, style }) => {
  console.log(itemName, url)
  return (
    <Box {...style}>
      <VStack>
        <Image boxSize={"50%"} src={url} alt={itemName} />
        <Text fontSize={"4xl"} color={RarityColor[rarity]}>{itemName}</Text>
      </VStack>
    </Box>
  );
};

export default ItemImageDisplay;