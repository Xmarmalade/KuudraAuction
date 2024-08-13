import React, { MouseEventHandler, useState } from "react";
import { useRouter } from "next/router";
import { Box, BoxProps, Text, HStack, VStack } from "@chakra-ui/react";
import DropDownBox from "./input/DropDownBox";
import ItemDropDown from "./input/ItemDropDown";
import AttributeDropDown from "./input/AttributeDropDown";
import { validateItem } from "@/constants/SBAttributeItems";
import { validateAttribute } from "@/constants/SBAttributes";
import SearchButton from "./input/SearchButton";
import AttributeLevelDropDown from "./input/AttributeLevelDropDown";


const KuudraItemInput: React.FC<{
  style?: BoxProps
}> = ({ style }) => {
  const [itemName, setItemName] = useState("");
  const [attr1, setAttr1] = useState("");
  const [attr2, setAttr2] = useState("");
  const [level1, setLevel1] = useState("");
  const [level2, setLevel2] = useState("");

  const router = useRouter();

  const handleSearchButtonClick = (e: MouseEvent) => {
    e.preventDefault();
    const url = `/kuudra/${validateItem(itemName)}?attr1=${validateAttribute(attr1)}&attr2=${validateAttribute(attr2)}&level1=${level1}&level2=${level2}`;
    router.push(url);
  }

  return (
    <Box {...style} padding={"20px"} boxShadow={"lg"} rounded={"lg"} backgroundColor={"gray.700"}>
      <Text fontSize={"4xl"} as={"u"}>Item Search with Attributes</Text>
      <VStack spacing={"16px"}>
        <HStack spacing={"24px"}>
          <DropDownBox title='Item Name' detail='Input Kuudra item name.'>
            <ItemDropDown style={{ width: "100%", isdisabled: false }} itemName={itemName} setItemName={setItemName} />
          </DropDownBox>
          <DropDownBox title='Attribute1' detail='Input first attribute name.'>
            <HStack>
              <AttributeDropDown style={{ width: "60%", isdisabled: itemName === "" ? true : false }} attribute={attr1} setAttribute={setAttr1} />
              <AttributeLevelDropDown style={{ width: "20%", isdisabled: itemName === "" ? true : false }} attributeLevel={level1} setAttributeLevel={setLevel1} />
            </HStack>
          </DropDownBox>
          <DropDownBox title='Attribute2' detail='Input second attribute name(optional.)'>
            <HStack>
              <AttributeDropDown style={{ width: "60%", isdisabled: attr1 === "" ? true : false }} attribute={attr2} setAttribute={setAttr2} />
              <AttributeLevelDropDown style={{ width: "20%", isdisabled: attr1 === "" ? true : false }} attributeLevel={level2} setAttributeLevel={setLevel2} />
            </HStack>
          </DropDownBox>
        </HStack>
        <Box>
          <SearchButton isdisabled={itemName === "" ? true : false} onClick={handleSearchButtonClick as unknown as MouseEventHandler<HTMLButtonElement>} />
        </Box>
      </VStack>
    </Box>
  );
}

export default KuudraItemInput;