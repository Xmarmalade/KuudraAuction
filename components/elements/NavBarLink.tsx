import React from "react";
import { Box, Link } from "@chakra-ui/react";
import NextLink from 'next/link';

const NavBarLink: React.FC<{
  uri: string
  text: string
}> = ({uri, text}) => {
  return (
    <Box boxShadow={"lg"} margin={"20px"} paddingLeft={"10px"} paddingRight={"10px"} paddingTop={"5px"} paddingBottom={"5px"} borderRadius={"md"} backgroundColor={"gray.600"}>
      <Link as={NextLink} href={uri}>
        {text}
      </Link>
    </Box>
  )
}

export default NavBarLink;