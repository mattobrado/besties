import { BottomNavigationItem } from "chakra-ui-bottom-navigation";
import { Text } from "@chakra-ui/react";

const MyNavigationItem = (props: { children: React.ReactNode }) => (
  <Text fontSize="5xl">
    <BottomNavigationItem>{props.children}</BottomNavigationItem>
  </Text>
);

export default MyNavigationItem;
