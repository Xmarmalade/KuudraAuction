import React from "react";
import DropDown from "../elements/DropDown";
import { Box, Select } from "@chakra-ui/react";

const AttributeLevelDropDown: React.FC<
  {
    style: {
      width: string
      isDisabled: boolean
    }
    attributeLevel: string
    setAttributeLevel: React.Dispatch<React.SetStateAction<string>>
  }> = ({ style, attributeLevel, setAttributeLevel }) => {
    return (
      <Box {...style}>
        <Select onChange={e => setAttributeLevel(e.target.value)} defaultValue={"1"}>
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].map((num, i) => (
            <option value={num} key={i}>{num}</option>
          ))}
        </Select>
      </Box>
    );
}

export default AttributeLevelDropDown;