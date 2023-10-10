import { BottomNavigationItem } from "chakra-ui-bottom-navigation";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const MyNavigationItem = ({
  icon,
  to,
  onClick,
}: {
  icon: string;
  to: string;
  onClick?: () => void;
}) => (
  <Text fontSize="4xl">
    <BottomNavigationItem as={Link} to={to} onClick={onClick}>
      {icon}
    </BottomNavigationItem>
  </Text>
);

export default MyNavigationItem;
