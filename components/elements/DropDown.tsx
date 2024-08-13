import React from "react";
import { Flex, FormControl, Avatar, Text } from "@chakra-ui/react";
import { AutoComplete, AutoCompleteInput, AutoCompleteList, AutoCompleteItem } from "@choc-ui/chakra-autocomplete";
import { SBAttributeItemIDs } from "@/constants/SBAttributeItems";
import { SBAttributeItemType } from "@/types/AttributeItemTypes";

const DropDown: React.FC<
  {
    style: {
      width: string
      isdisabled: boolean
    }
    text: string
    setText: React.Dispatch<React.SetStateAction<string>>
    isItem: boolean
    placeholder: string
    suggestions: string[]
  }> = ({ style, text, setText, isItem, placeholder, suggestions }) => {
    return (
      <Flex width={style.width} >
        <FormControl>
          <AutoComplete onSelectOption={(params) => setText(params.item.value)} placeholder={placeholder} value={text} >
            <AutoCompleteInput isdisabled={style.isdisabled} onChange={e => setText(e.target.value)} />
            <AutoCompleteList>
              {isItem ?
                suggestions.map((attr, i) => (
                  <AutoCompleteItem key={i} value={attr} textTransform={"capitalize"}>
                    <Avatar size={"sm"} name={attr} src={SBAttributeItemIDs[attr as SBAttributeItemType].url} />
                    <Text ml={4} align={"center"}>{attr}</Text>
                  </AutoCompleteItem>
                ))
                : suggestions.map((attr, i) => (
                  <AutoCompleteItem key={i} value={attr} textTransform={"capitalize"}>
                    {attr}
                  </AutoCompleteItem>
              ))}
            </AutoCompleteList>
          </AutoComplete>
        </FormControl>
      </Flex>
    );
}

export default DropDown;