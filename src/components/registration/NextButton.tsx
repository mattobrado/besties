import { Button, Text } from "@chakra-ui/react";

const NextButton = ({
  onClick,
  isLoading,
  buttonProps,
}: {
  onClick?: () => void;
  isLoading: boolean;
  buttonProps?: { type: "button" | "submit" | "reset" };
}) => (
  <Button
    colorScheme="pink"
    onClick={onClick}
    isLoading={isLoading}
    {...buttonProps}
  >
    <Text color={"black"} w={"96px"} fontSize={"lg"}>
      {"Next"}
    </Text>
  </Button>
);

export default NextButton;
