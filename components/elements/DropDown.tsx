import React from "react";
import { Box, Input, Text } from "@chakra-ui/react";

const DropDown: React.FC<
  {
    style: {
      width: string
      isDisabled: boolean
    }
    text: string
    setText: React.Dispatch<React.SetStateAction<string>>
    placeholder: string
    suggestions: string[]
  }> = ({ style, text, setText, placeholder, suggestions }) => {
    const [isFocus, setIsFocus] = React.useState(false);
    const [currentSuggestions, setCurrentSuggestions] = React.useState<string[]>([]);

    const handleTextChange = (text: string) => {
      let mathes: string[] = [];
      if (text.length > 0) {
        mathes = suggestions?.filter((attr) => {
          const regex = new RegExp(`${text}`, "gi");
          return attr.match(regex);
        });
      }
      setCurrentSuggestions(mathes);
      setText(text);
    };

    return (
      <Box w={style.width} >
        <Input
          onFocus={() => setIsFocus(true)}
          type="text"
          value={text}
          onChange={(e) => handleTextChange(e.target.value)}
          placeholder={placeholder}
          isDisabled={style.isDisabled}
        />
        {isFocus && (
          <Box
            w={"100%"}
            h={"100%"}
            boxShadow={"md"}
            mt={"8px"}
            borderRadius={"lg"}
          >
            {currentSuggestions?.map((suggest, i) => (
              <Text
                cursor={"pointer"}
                _hover={{ bg: "gray.500" }}
                key={i}
                p={"8px 8px"}
                onClick={() => {
                  setText(suggest);
                  setIsFocus(false);
                }}
              >
                {suggest}
              </Text>
            ))}
          </Box>
        )}
      </Box>
    )
}

export default DropDown;