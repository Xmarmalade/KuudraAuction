import React from "react";
import { Box, Text } from "@chakra-ui/react";

const DropDownBox: React.FC<{
  title: string
  detail?: string
  children: React.ReactNode
}> = ({ title, detail, children }) => {
  return (
    <Box padding={"10px"}>
      <Text fontSize={"2xl"}>
        {title}
      </Text>
      {detail && 
        <Text fontSize={"sm"}>
          {detail}
        </Text>
      }
      <Box padding={"5px"} paddingTop={"10px"}>
        {children}
      </Box>
    </Box>
  )
};

export default DropDownBox;