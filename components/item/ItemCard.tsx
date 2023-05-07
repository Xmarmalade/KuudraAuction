import React from "react";
import { Box, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Text } from "@chakra-ui/react";
import ItemName from "../elements/ItemName";
import { getAttributeNameFromID } from "@/constants/SBAttributes";
import { ItemDataType } from "@/types/ItemDataTypes";
import { useRouter } from "next/router";
import { formatCoinText } from "@/utils/price";

const ItemCard: React.FC<{
  itemData: ItemDataType
}> = ({ itemData }) => {
  const router = useRouter();
  const handleClick = () => {
    const auctionID = itemData.uuid;
    const url = `/auction/${auctionID}`;
    router.push(url);
  }
  return (
    <Card margin={"15px"} width={"100%"} onClick={handleClick}
      overflow={"hidden"}
      _before={{
        content: `""`,
        display: "inline_block",
        position: "absolute",
        top: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "gray.600",
        transition: "0.5s",
        right: "100%"
      }}
      _hover={{
        _before: { right: "0" }
      }}
    >
      <Box padding={"5px"} boxShadow={"lg"} borderRadius={"lg"} zIndex={1}>
        <CardHeader>
          <ItemName name={itemData.item_name} rarity={itemData.rarity} style={{fontSize: "2xl"}}/>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing={4}>
            <Box>
              <Text fontSize={"lg"}>{`Price: ${formatCoinText(itemData.price)} coins`}</Text>
            </Box>
            {itemData.attributes.length !== 0 &&
              <Box>
                <Heading size={"md"} textTransform={"capitalize"}>
                  Attributes
                </Heading>
                {itemData.attributes.map((attr, i) => (
                  <Text fontSize={"sm"} key={i}>{`${getAttributeNameFromID(attr.name)} ${attr.value.toString()}`}</Text>
                ))}
              </Box>
            }
          </Stack>
        </CardBody>
      </Box>
    </Card>
  );
};

export default ItemCard;