import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

const SearchButton: React.FC<
  {
    isDisabled: ButtonProps["isDisabled"]
    onClick: ButtonProps["onClick"]
  }> = ({isDisabled, onClick}) => {
    return (
      <Button
        colorScheme="blue"
        isDisabled={isDisabled}
        onClick={onClick}
        size={"md"}
      >
        {`Search`}
      </Button>
    );
}

export default SearchButton;