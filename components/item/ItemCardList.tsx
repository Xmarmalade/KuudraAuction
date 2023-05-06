import React from "react";
import { Box, BoxProps, VStack } from "@chakra-ui/react";
import ItemCard from "./ItemCard";
import { ItemDataType } from "@/types/ItemDataTypes";

const ItemCardList: React.FC<{
  data: ItemDataType[]
  style?: BoxProps
}> = ({ data, style }) => {
  return (
    <Box {...style}>
        {data.map((d, i) => (
          <ItemCard itemData={d} key={i} />
        ))}
    </Box>
  );
};

export default ItemCardList;