import { Text, TextProps } from "@chakra-ui/react";
import { formatDistanceToNow } from "date-fns";
import { useContext } from "react";
import { ContentContext } from "src/context";

export const TimeStamp = ({
  date,
  textProps,
}: {
  date: number;
  textProps?: TextProps;
}) => {
  const content = useContext(ContentContext);
  return (
    <Text {...textProps}>
      {formatDistanceToNow(date)} {content.post.ago}
    </Text>
  );
};
