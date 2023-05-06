import React from "react";
import { Box, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Text } from "@chakra-ui/react";
import ItemName from "../elements/ItemName";
import { getAttributeNameFromID } from "@/constants/SBAttributes";
import { ItemDataType } from "@/types/ItemDataTypes";

const ItemCard: React.FC<{
  itemData: ItemDataType
}> = ({itemData}) => {
  return (
    <Card margin={"15px"} width={"100%"}>
      <Box padding={"5px"} boxShadow={"lg"} borderRadius={"lg"}>
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
                <Text fontSize={"sm"} key={i}>{`${getAttributeNameFromID(attr.name)} ${attr.value.toString()}`}</Text>
              ))}
            </Box>
          </Stack>
        </CardBody>
      </Box>
    </Card>
  );
};

export default ItemCard;