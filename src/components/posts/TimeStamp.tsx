import { Text, TextProps } from "@chakra-ui/react";
import { formatDistanceToNow } from "date-fns";
import { bestiesContent } from "../../lib/content/bestiesContent";

const TimeStamp = ({
  date,
  textProps,
}: {
  date: number;
  textProps?: TextProps;
}) => (
  <Text {...textProps}>
    {formatDistanceToNow(date)} {bestiesContent.post.ago}
  </Text>
);

export default TimeStamp;
