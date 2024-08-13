import React from "react";
import DropDown from "../elements/DropDown";
import { SBAttributeItems } from "@/constants/SBAttributeItems";

const ItemDropDown: React.FC<
  {
    style: {
      width: string
      isdisabled: boolean
    }
    itemName: string
    setItemName: React.Dispatch<React.SetStateAction<string>>
  }> = ({ style, itemName, setItemName }) => {
    const placeholderText = "Item name here";
    return (
      <DropDown style={style} text={itemName} setText={setItemName} isItem={true} placeholder={placeholderText} suggestions={SBAttributeItems} />
    );
}

export default ItemDropDown;