import { HStack, Text, Box, IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ACTION_ICON_SIZE } from "src/lib";

export const ActionButton = ({
  onClick,
  icon,
  number,
  to,
}: {
  onClick?: () => void;
  icon: JSX.Element;
  number?: number;
  to?: string;
  color?: string;
}) => (
  <Box w={12}>
    <HStack spacing={0}>
      <IconButton
        as={Link}
        to={to}
        onClick={onClick}
        variant="ghost"
        size={ACTION_ICON_SIZE}
        icon={icon}
        aria-label={"delete post"}
      />
      <Text fontSize="md">{number}</Text>
    </HStack>
  </Box>
);
