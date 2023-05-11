import { Box, BoxProps, HStack, Select, Text, VStack } from "@chakra-ui/react";
import React, { MouseEventHandler, useState } from "react";
import AttributeDropDown from "./AttributeDropDown";
import SearchButton from "./SearchButton";
import { useRouter } from "next/router";
import { validateAttribute } from "@/constants/SBAttributes";
import DropDownBox from "./DropDownBox";

const ArmorAttributeInput: React.FC<{
  style?: BoxProps
}> = ({ style }) => {
  const [armor, setArmor] = useState("");
  const [attr, setAttr] = useState("");

  const router = useRouter();

  const handleSearchButtonClick = (e: MouseEvent) => {
    e.preventDefault();
    const url = `/attribute/${armor}?attribute=${validateAttribute(attr)}`;
    router.push(url);
  }

  return (
    <Box {...style} padding={"20px"} boxShadow={"lg"} rounded={"lg"} backgroundColor={"gray.700"}>
      <Text fontSize={"4xl"} as={"u"}>Armor Lowest Bin with Attributes</Text>
      <VStack>
        <HStack spacing={100}>
          <DropDownBox title="Armor Piece" detail="Select armor piece.">
            <Select onChange={e => setArmor(e.target.value)} defaultValue={"default"}>
              <option hidden disabled value={"default"}>Select armor piece</option>
              <option value={"helmet"}>Helmet</option>
              <option value={"chestplate"}>Chestplate</option>
              <option value={"leggings"}>Leggings</option>
              <option value={"boots"}>Boots</option>
            </Select>
          </DropDownBox>
          <DropDownBox title="Attribute" detail="Input attribute name to search.">
            <AttributeDropDown style={{ width: "100%", isDisabled: armor === "" ? true : false }} attribute={attr} setAttribute={setAttr} />
          </DropDownBox>
        </HStack>
        <Box>
          <SearchButton isDisabled={armor === "" ? true : false} onClick={handleSearchButtonClick as unknown as MouseEventHandler<HTMLButtonElement>} />
        </Box>
      </VStack>
    </Box>
  );
}

export default ArmorAttributeInput;