import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { ItemDataType } from "@/types/ItemDataTypes";
import { GetServerSideProps } from "next";
import ItemCard from "@/components/item/ItemCard";
import StandardLayout from "@/components/Layout/StandardLayout";
import TimeDisplay from "@/components/elements/TimeDisplay";

type Props = {
  success: boolean;
  last_update: number;
  data: {
    item_name: string,
    data: ItemDataType
  }[];
};

const LowestBin: React.FC<Props> = (props: Props) => {
  console.log(Date.now(), props.last_update);
  return (
    <StandardLayout>
      <Box width={"90%"} margin={"5%"}>
        <Box width={"100%"} display={"flex"} justifyContent={"right"}>
          <TimeDisplay epoch_time={props.last_update} style={{fontSize: "2xl"}}/>
        </Box>
        <SimpleGrid columns={2} spacing={10}>
          {props.data.map((itemData, i) => (
            <ItemCard itemData={itemData.data} key={i} />
          ))}
        </SimpleGrid>
      </Box>
    </StandardLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const baseUrl = process.env["BASE_URL"];
  const url = `${baseUrl}/api/auction/kuudra/lowestbin`;
  const res = await fetch(url);
  const rawLBData: Props = await res.json();
  return {
    props: rawLBData
  };
}

export default LowestBin;