import React from "react";
import DropDown from "../elements/DropDown";
import { SBKuudraItems } from "@/constants/SBKuudraItems";

const ItemDropDown: React.FC<
  {
    style: {
      width: string
      isDisabled: boolean
    }
    itemName: string
    setItemName: React.Dispatch<React.SetStateAction<string>>
  }> = ({ style, itemName, setItemName }) => {
    const placeholderText = "Item name here";
    return (
      <DropDown style={style} text={itemName} setText={setItemName} placeholder={placeholderText} suggestions={SBKuudraItems} />
    );
}

export default ItemDropDown;