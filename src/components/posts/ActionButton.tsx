import { HStack, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ActionButton = ({
  onClick,
  icon,
  number,
  to,
}: {
  onClick?: () => Promise<void>;
  icon: string;
  number: number;
  to?: string;
}) => (
  <HStack spacing={0}>
    <Button as={Link} to={to} onClick={onClick} size="sm" variant="link">
      {icon}
    </Button>
    <Text fontSize="sm">{number}</Text>
  </HStack>
);

export default ActionButton;
