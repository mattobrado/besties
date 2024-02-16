import { Button, Text } from "@chakra-ui/react";

export const NextButton = ({
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
    type="submit"
    {...buttonProps}
  >
    <Text w={"96px"} fontSize={"lg"}>
      {"Next"}
    </Text>
  </Button>
);
