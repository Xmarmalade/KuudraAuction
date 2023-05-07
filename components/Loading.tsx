import React from "react";
import { Box, VStack, Spinner, Text } from "@chakra-ui/react";
import StandardLayout from "./Layout/StandardLayout";

const Loading: React.FC = () => {
  return (
    <StandardLayout>
      <Box marginTop={"5%"} display={"flex"} justifyContent={"center"}>
        <VStack>
          <Spinner thickness="5px" speed="0.8s" emptyColor="gray.100" color="blue.600" size={"xl"} />
          <Text fontSize={"3xl"}>{"Loading data..."}</Text>
        </VStack>
      </Box>
    </StandardLayout>
  );
}

export default Loading;