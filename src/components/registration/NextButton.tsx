import { Button, Text } from "@chakra-ui/react";

const NextButton = ({ onClick }: { onClick: () => void }) => (
  <Button colorScheme="pink" onClick={onClick}>
    <Text color={"black"} w={"96px"} fontSize={"lg"}>
      {"Next"}
    </Text>
  </Button>
);

export default NextButton;
