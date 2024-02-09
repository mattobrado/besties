import { Button, Text } from "@chakra-ui/react";

const NextButton = ({
  onClick,
  isLoading,
}: {
  onClick: () => void;
  isLoading: boolean;
}) => (
  <Button colorScheme="pink" onClick={onClick} isLoading={isLoading}>
    <Text color={"black"} w={"96px"} fontSize={"lg"}>
      {"Next"}
    </Text>
  </Button>
);

export default NextButton;
