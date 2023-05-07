import React from "react";
import { Box, Code, Fade, HStack, Heading, Text, Tooltip, useClipboard, useToast } from "@chakra-ui/react";
import { CheckIcon, CopyIcon } from "@chakra-ui/icons";
import { ItemDataType } from "@/types/ItemDataTypes";
import ItemName from "../elements/ItemName";
import { getAttributeNameFromID } from "@/constants/SBAttributes";
import { convertMStoDate } from "@/utils/date";
import { formatCoinText } from "@/utils/price";

const ItemDetailCard: React.FC<{
  itemData: ItemDataType
}> = ({ itemData }) => {
  const { onCopy, value, setValue, hasCopied } = useClipboard(`/viewauction ${itemData.uuid}`);
  const toast = useToast();
  const handleClick = () => {
    onCopy();
    toast({
      title: "Command Copied.",
      description: "ViewAuction command is on your clipboard!",
      status: "success",
      duration: 5000,
      isClosable: true
    });
  };

  const elapsed = convertMStoDate(Date.now() - itemData.start_unix);
  const end = convertMStoDate(itemData.end_unix - Date.now());

  return (
    <Box>
      <ItemName name={itemData.item_name} rarity={itemData.rarity} style={{ fontSize: "5xl", margin: "10px" }} />
      <Box paddingLeft={"30px"}>
        <Text fontSize={"2xl"}>{`Price: ${formatCoinText(itemData.price)} coins`}</Text>
        {itemData.attributes.length !== 0 &&
          <Box marginTop={"5px"}>
            <Heading>{"Attributes"}</Heading>
            <Box paddingLeft={"5px"}>
              {itemData.attributes.map((attr, i) => (
                <Text fontSize={"lg"} key={i}>{`${getAttributeNameFromID(attr.name)} ${attr.value.toString()}`}</Text>
              ))}
            </Box>
          </Box>
        }
        <HStack marginTop={"10px"}>
          <Text fontSize={"2xl"}>{`ViewAuction Command: `}</Text>
          <Code fontSize={"2xl"}>{`/viewauction ${itemData.uuid}`}</Code>
          {!hasCopied ?
            <Tooltip label={"Click to copy"} >
              <CopyIcon fontSize={"2xl"} onClick={handleClick} />
            </Tooltip>
            : (
              <Fade in={hasCopied}>
                <CheckIcon />
              </Fade>
            )
          }
        </HStack>
        <Text fontSize={"2xl"}>{`Auction lasts for: ${elapsed[0]}d ${elapsed[1]}h ${elapsed[2]}m ${elapsed[3]}s`}</Text>
        {end[3] >= 0 ?
          <Text fontSize={"2xl"}>{`Auction ends in: ${end[0]}d ${end[1]}h ${end[2]}m ${end[3]}s`}</Text>
          : <HStack>
            <Text fontSize={"2xl"}>{"Auction ends in: "}</Text>
            <Text fontSize={"2xl"} color={"red.500"}>{"Ended!"}</Text>
          </HStack>
        }
      </Box>
    </Box>
  );
};

export default ItemDetailCard;