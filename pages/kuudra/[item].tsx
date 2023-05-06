import Error from "next/error";
import { GetServerSideProps } from "next";
import React from "react";
import { Box } from "@chakra-ui/react";
import { ItemDataType } from "@/types/ItemDataTypes";
import ItemCardList from "@/components/item/ItemCardList";
import ItemImageDisplay from "@/components/item/ItemImageDisplay";
import { SBKuudraItemIDType, SBKuudraItemType } from "@/types/KuudraItemTypes";
import { getNameFromItemID, getUrlFromItemID } from "@/constants/SBKuudraItems";

type Props = {
  itemID: string;
  apiData: {
    success: boolean;
    data: ItemDataType[];
  }
};

const Items: React.FC<Props> = (props: Props) => {
  if (props.apiData.success == false) {
    return (<Error statusCode={404} />);
  }
  return (
    <Box>
        <ItemImageDisplay itemName={getNameFromItemID(props.itemID as SBKuudraItemIDType) as SBKuudraItemType}
          rarity={props.apiData.data[0].rarity}
          url={getUrlFromItemID(props.itemID as SBKuudraItemIDType)}
          style={{width: "40%", pos: "fixed", top: "10%"}}
        />
        <ItemCardList data={props.apiData.data} style={{ width: "60%", padding: "20px", paddingRight: "40px", marginLeft: "40%" }} />
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { item, attr1, attr2 } = context.query;
  let url = `https://hypixelattributeauction-production.up.railway.app/api/auction/item_id/${item}`;
  if (attr1 !== "") url += `?attribute1=${attr1}`;
  if (attr2 !== "") url += `&attribute2=${attr2}`;
  console.log(url);
  const res = await fetch(url);
  const rawItemData: Props = await res.json();
  return {
    props: {
      itemID: item,
      apiData: rawItemData
    }
  };
}

export default Items;