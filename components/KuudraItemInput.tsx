import React, { MouseEventHandler, useState } from "react";
import { useRouter } from "next/router";
import { Box, BoxProps, Text, HStack, VStack } from "@chakra-ui/react";
import DropDownBox from "./input/DropDownBox";
import ItemDropDown from "./input/ItemDropDown";
import AttributeDropDown from "./input/AttributeDropDown";
import { validateItem } from "@/constants/SBKuudraItems";
import { validateAttribute } from "@/constants/SBAttributes";
import SearchButton from "./input/SearchButton";


const KuudraItemInput: React.FC<{
  style?: BoxProps
}> = ({ style }) => {
  const [itemName, setItemName] = useState("");
  const [attr1, setAttr1] = useState("");
  const [attr2, setAttr2] = useState("");

  const router = useRouter();

  const handleSearchButtonClick = (e: MouseEvent) => {
    e.preventDefault();
    const url = `/kuudra/${validateItem(itemName)}?attr1=${validateAttribute(attr1)}&attr2=${validateAttribute(attr2)}`;
    router.push(url);
  }

  return (
    <Box {...style} padding={"20px"} boxShadow={"lg"} rounded={"lg"} backgroundColor={"gray.700"}>
      <Text fontSize={"4xl"} as={"u"}>Item Search with Attributes</Text>
      <VStack spacing={"16px"}>
        <HStack spacing={"24px"}>
          <DropDownBox title='Item Name' detail='Input Kuudra item name.'>
            <ItemDropDown style={{ width: "100%", isDisabled: false }} itemName={itemName} setItemName={setItemName} />
          </DropDownBox>
          <DropDownBox title='Attribute1' detail='Input first attribute name.'>
            <AttributeDropDown style={{ width: "100%", isDisabled: itemName === "" ? true : false }} attribute={attr1} setAttribute={setAttr1} />
          </DropDownBox>
          <DropDownBox title='Attribute2' detail='Input second attribute name(optional.)'>
            <AttributeDropDown style={{ width: "100%", isDisabled: attr1 === "" ? true : false }} attribute={attr2} setAttribute={setAttr2} />
          </DropDownBox>
        </HStack>
        <Box>
          <SearchButton isDisabled={itemName === "" ? true : false} onClick={handleSearchButtonClick as unknown as MouseEventHandler<HTMLButtonElement>} />
        </Box>
      </VStack>
    </Box>
  );
}

export default KuudraItemInput;