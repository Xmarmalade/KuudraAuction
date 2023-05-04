import React from "react";
import { Box, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Text, CardProps } from "@chakra-ui/react";
import ItemName from "../elements/ItemName";
import { ItemDataType } from "@/types/ItemDataTypes";

const ItemCard: React.FC<{
  itemData: ItemDataType
}> = ({itemData}) => {
  return (
    <Card>
      <Box border={"1px"} borderRadius={"lg"}>
        <CardHeader>
          <ItemName name={itemData.item_name} rarity={itemData.rarity} />
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing={4}>
            <Box>
              <Text fontSize={"md"}>{`Price: ${itemData.price.toString()} coins`}</Text>
            </Box>
            <Box>
              <Heading size={"md"} textTransform={"capitalize"}>
                Attributes
              </Heading>
              {itemData.attributes.map((attr, i) => (
                <Text fontSize={"sm"} key={i}>{`${attr.name} ${attr.value.toString()}`}</Text>
              ))}
            </Box>
          </Stack>
        </CardBody>
      </Box>
    </Card>
  );
};

export default ItemCard;