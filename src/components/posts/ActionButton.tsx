import { HStack, Button, Text, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ActionButton = ({
  onClick,
  icon,
  number,
  to,
}: {
  onClick?: () => void;
  icon: string;
  number?: number;
  to?: string;
}) => (
  <Box w={12}>
    <HStack spacing={0}>
      <Button as={Link} to={to} onClick={onClick} size="sm" variant="link">
        {icon}
      </Button>
      <Text fontSize="sm">{number}</Text>
    </HStack>
  </Box>
);

export default ActionButton;
