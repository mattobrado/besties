import { HStack, Button, Text } from "@chakra-ui/react";

const ActionButton = ({
  onClick,
  icon,
  number,
}: {
  onClick: () => Promise<void>;
  icon: string;
  number: number;
}) => (
  <HStack spacing={0}>
    <Button onClick={onClick} size="sm" variant="link">
      {icon}
    </Button>
    <Text fontSize="sm">{number}</Text>
  </HStack>
);

export default ActionButton;
