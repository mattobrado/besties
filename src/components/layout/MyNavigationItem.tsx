import { BottomNavigationItem } from "chakra-ui-bottom-navigation";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const MyNavigationItem = ({ icon, to }: { icon: string; to: string }) => (
  <Text fontSize="5xl">
    <BottomNavigationItem as={Link} to={to}>
      {icon}
    </BottomNavigationItem>
  </Text>
);

export default MyNavigationItem;
