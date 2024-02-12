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
    onClick={onClick}
    isLoading={isLoading}
    variant={"brandPrimary"}
    id={"continueRegistration"}
    {...buttonProps}
  >
    <Text w={"96px"} fontSize={"lg"}>
      {"Next"}
    </Text>
  </Button>
);

export default NextButton;
