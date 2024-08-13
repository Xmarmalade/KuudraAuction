import React from "react";
import DropDown from "../elements/DropDown";
import { SBAttributes } from "@/constants/SBAttributes";

const AttributeDropDown: React.FC<
  {
    style: {
      width: string
      isdisabled: boolean
    }
    attribute: string
    setAttribute: React.Dispatch<React.SetStateAction<string>>
  }> = ({ style, attribute, setAttribute }) => {
    const placeholderText = "Attribute name here";
    return (
      <DropDown style={style} text={attribute} setText={setAttribute} isItem={false} placeholder={placeholderText} suggestions={SBAttributes} />
    );
}

export default AttributeDropDown;