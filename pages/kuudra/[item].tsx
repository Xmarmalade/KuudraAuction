import Error from "next/error";
import { GetServerSideProps } from "next";
import React from "react";
import { ItemDataType } from "@/types/ItemDataTypes";
import ItemCardList from "@/components/item/ItemCardList";
import ItemImageDisplay from "@/components/item/ItemImageDisplay";
import { SBAttributeItemIDType, SBAttributeItemType } from "@/types/AttributeItemTypes";
import { getNameFromItemID, getUrlFromItemID } from "@/constants/SBAttributeItems";
import StandardLayout from "@/components/Layout/StandardLayout";
import { Box, VStack } from "@chakra-ui/react";
import TimeDisplay from "@/components/elements/TimeDisplay";

type Props = {
  itemID: string;
  apiData: {
    success: boolean;
    last_update: number;
    data: ItemDataType[];
  }
};

const Items: React.FC<Props> = (props: Props) => {
  if (props.apiData.success == false) {
    return (<Error statusCode={404} />);
  }
  return (
    <StandardLayout>
      <ItemImageDisplay itemName={getNameFromItemID(props.itemID as SBAttributeItemIDType) as SBAttributeItemType}
        rarity={props.apiData.data[0].rarity}
        url={getUrlFromItemID(props.itemID as SBAttributeItemIDType)}
        style={{ width: "40%", pos: "fixed", top: "10%" }}
      />
      <VStack width={"60%"} padding={"20px"} paddingRight={"40px"} marginLeft={"40%"}>
        <Box width={"100%"} display={"flex"} justifyContent={"right"}>
          <TimeDisplay epoch_time={props.apiData.last_update} style={{ fontSize: "2xl" }} />
        </Box>
        <ItemCardList data={props.apiData.data} style={{width: "100%"}} />
      </VStack>
    </StandardLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { item, attr1, attr2 } = context.query;
  const baseUrl = process.env["BASE_URL"];
  let url = `${baseUrl}/api/auction/item_id/${item}`;
  if (attr1 !== "") url += `?attribute1=${attr1}`;
  if (attr2 !== "") url += `&attribute2=${attr2}`;
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