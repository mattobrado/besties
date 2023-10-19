import { BottomNavigationItem } from "chakra-ui-bottom-navigation";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BOTTOM_NAV_HEIGHT } from "../../lib/constants";

const MyNavigationItem = ({
  icon,
  to,
  onClick,
}: {
  icon: JSX.Element;
  to: string;
  onClick?: () => void;
}) => (
  <Text fontSize="4xl" h={BOTTOM_NAV_HEIGHT}>
    <BottomNavigationItem as={Link} to={to} onClick={onClick}>
      {icon}
    </BottomNavigationItem>
  </Text>
);

export default MyNavigationItem;
