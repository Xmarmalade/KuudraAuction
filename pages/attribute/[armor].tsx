import StandardLayout from "@/components/Layout/StandardLayout";
import ItemCard from "@/components/item/ItemCard";
import { ItemDataType } from "@/types/ItemDataTypes";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import React from "react";

type Props = {
  success: boolean;
  data: ItemDataType[];
}

const Armor: React.FC<Props> = (props: Props) => {
  return (
    <StandardLayout>
      <Box width={"90%"} margin={"5%"}>
        <SimpleGrid columns={2} spacing={10}>
          {props.data.map((itemData, i) => (
            <ItemCard itemData={itemData} key={i} />
          ))}
        </SimpleGrid>
      </Box>
    </StandardLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { armor, attribute } = context.query;
  if (!(armor === "helmet" || armor === "chestplate" || armor === "leggings" || armor === "boots")) {
    return {
      props: {
        success: false,
        data: null
      }
    };
  }
  const baseUrl = process.env["BASE_URL"];
  const url = `${baseUrl}/api/auction/kuudra/armor/${armor}?attribute=${attribute}`;
  const res = await fetch(url);
  const rawItemData: Props = await res.json();
  return {
    props: rawItemData
  };
}

export default Armor;