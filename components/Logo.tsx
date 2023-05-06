import React from "react";
import { Box, Image } from "@chakra-ui/react";

const Logo: React.FC<{}> = () => {
  return (
    <Box width={"100px"} height={"70px"} padding={"5px"} display={"flex"} justifyContent={"space-around"}>
      <Image borderRadius={"lg"} src="/logo.png" alt="Logo"/>
    </Box>
  );
}

export default Logo;