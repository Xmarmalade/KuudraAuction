import { isValidItem } from "@/constants/SBKuudraItems";
import { validateAttribute } from "@/constants/SBAttributes";
import { ItemDataType } from "@/types/ItemDataTypes";
import Error from "next/error";
import { GetServerSideProps } from "next";
import React from "react";
import ItemCard from "@/components/item/ItemCard";
import { SimpleGrid } from "@chakra-ui/react";

type Props = {
  success: boolean;
  data: ItemDataType[];
};

const Items: React.FC<Props> = (props: Props) => {
  if (props.success == false) {
    return (<Error statusCode={404} />);
  }
  return (
    <SimpleGrid column={3} spacing={10}>
      {props.data.map((itemData, i) => (
        <ItemCard itemData={itemData} key={i}/>
      ))}
    </SimpleGrid>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { item, attr1, attr2 } = context.query;
  console.log(item, attr1, attr2);
  
  //if (!isValidItem(item) || !isValidAttribute(attr1) || !isValidAttribute(attr2)) {
  /*if (!isValidAttribute(attr1) || !isValidAttribute(attr2)) {
    return {
      props: { success: false, data: [] }
    };
  }*/

  let url = `https://hypixelattributeauction-production.up.railway.app/api/auction/item_id/${item}`;
  if (attr1 !== "") url += `?attribute1=${attr1}`;
  if (attr2 !== "") url += `&attribute2=${attr2}`;
  console.log(url);
  const res = await fetch(url);
  const rawItemData: Props = await res.json();
  return {
    props: rawItemData
  };
}

export default Items;