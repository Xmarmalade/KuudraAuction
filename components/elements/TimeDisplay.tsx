import { convertMStoDate } from "@/utils/date";
import { Text, TextProps } from "@chakra-ui/react";
import React from "react";

const TimeDisplay: React.FC<{
  epoch_time: number
  style?: TextProps
}> = ({ epoch_time, style }) => {
  const diff = (Math.floor(Date.now() / 1000) - epoch_time) * 1000;
  const date = convertMStoDate(diff);
  return (
    <Text {...style}>{`Last update: ${date[2]}m${date[3]}s ago`}</Text>
  )
};

export default TimeDisplay;