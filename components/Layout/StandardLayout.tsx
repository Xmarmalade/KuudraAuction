import { Box } from "@chakra-ui/react";
import React from "react";
import NavBar from "../NavBar";

const StandardLayout: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <Box>
      <NavBar />
      {children}
    </Box>
  )
};

export default StandardLayout;