import { Text, TextProps } from "@chakra-ui/react";
import { formatDistanceToNow } from "date-fns";
import { content } from "../../lib/content";

const TimeStamp = ({
  date,
  textProps,
}: {
  date: number;
  textProps?: TextProps;
}) => (
  <Text color="gray.500" {...textProps}>
    {formatDistanceToNow(date)} {content.post.ago}
  </Text>
);

export default TimeStamp;
