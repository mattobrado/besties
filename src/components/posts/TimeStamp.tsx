import { Text } from "@chakra-ui/react";
import { formatDistanceToNow } from "date-fns";
import { content } from "../../lib/content";

const TimeStamp = ({ fontsize, date }: { fontsize: string; date: number }) => (
  <Text fontSize={fontsize} color="gray.500">
    {formatDistanceToNow(date)} {content.post.ago}
  </Text>
);

export default TimeStamp;
