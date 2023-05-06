import React from "react";
import NavBarLink from "./elements/NavBarLink";
import { Box, HStack } from "@chakra-ui/react";
import Logo from "./Logo";

const NavBar: React.FC<{}> = () => {
  return (
    <Box as="nav" h={"5%"} w={"100%"} backgroundColor={"gray.700"} pos={"static"}>
      <HStack>
        <Logo />
        <NavBarLink uri="/" text="Item Search" />
        <NavBarLink uri="/kuudra/LowestBin" text="Lowest Bin" />
      </HStack>
    </Box>
  )
};

export default NavBar;