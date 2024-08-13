import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

const SearchButton: React.FC<
  {
    isdisabled: ButtonProps["isdisabled"]
    onClick: ButtonProps["onClick"]
  }> = ({isdisabled, onClick}) => {
    return (
      <Button
        colorScheme="blue"
        isdisabled={isdisabled}
        onClick={onClick}
        size={"md"}
      >
        {`Search`}
      </Button>
    );
}

export default SearchButton;