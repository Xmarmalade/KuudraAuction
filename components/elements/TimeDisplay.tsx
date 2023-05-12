import { converMStoMinSec } from "@/utils/date";
import { Text, TextProps } from "@chakra-ui/react";
import React from "react";

const TimeDisplay: React.FC<{
  epoch_time: number
  style?: TextProps
}> = ({ epoch_time, style }) => {
  const diff = (Math.floor(Date.now() / 1000) - epoch_time) * 1000;
  const date = converMStoMinSec(diff);
  return (
    <Text {...style}>{`Last update: ${date[0]}m${date[1]}s ago`}</Text>
  )
};

export default TimeDisplay;