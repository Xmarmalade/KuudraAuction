import { isValidItem } from "@/constants/SBKuudraItems";
import { isValidAttribute } from "@/constants/SBAttributes";
import { ItemDataType } from "@/types/ItemDataTypes";
import Error from "next/error";
import { GetServerSideProps } from "next";
import React from "react";
import ItemCard from "@/components/item/ItemCard";

type Props = {
  success: boolean;
  data: ItemDataType[];
};

const Items: React.FC<Props> = (props: Props) => {
  if (props.success == false) {
    return (<Error statusCode={404} />);
  }
  return (
    <>
      {props.data.map((itemData, i) => (
        <ItemCard itemData={itemData} key={i}/>
      ))}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { item, attr1, attr2 } = context.query;
  
  //if (!isValidItem(item) || !isValidAttribute(attr1) || !isValidAttribute(attr2)) {
  if (!isValidAttribute(attr1) || !isValidAttribute(attr2)) {
    return {
      props: { success: false, data: [] }
    };
  }

  let url = `http://localhost:8000/api/auction/item_id/${item}`;
  if (attr1) url += `?attribute1=${attr1}`;
  if (attr2) url += `&attribute2=${attr2}`;
  const res = await fetch(url);
  const rawItemData: Props = await res.json();
  return {
    props: rawItemData
  };
}

export default Items;