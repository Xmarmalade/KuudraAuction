import React from "react";
import { Box } from "@chakra-ui/react";
import { ItemDataType } from "@/types/ItemDataTypes";
import ItemDetailCard from "@/components/item/ItemDetailCard";
import StandardLayout from "@/components/Layout/StandardLayout";
import { GetServerSideProps } from "next";
import Error from "next/error";

type Props = {
  success: boolean;
  data: ItemDataType;
}

const ItemDetail: React.FC<Props> = (props: Props) => {
  if (props.success === false) {
    return (<Error statusCode={404} />);
  }
  return (
    <StandardLayout>
      <Box width={"80%"} display={"flex"} justifyContent={"center"} >
        <ItemDetailCard itemData={props.data} />
      </Box>
    </StandardLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { auction } = context.query;
  const baseUrl = process.env["BASE_URL"];
  const url = `${baseUrl}/api/auction/auction_id/${auction}`;
  const res = await fetch(url);
  const rawItemData: Props = await res.json();
  if (rawItemData.data === null) {
    rawItemData.success = false;
  }
  return {
    props: rawItemData
  };
}

export default ItemDetail;