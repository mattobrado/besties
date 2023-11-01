import { Button, GridItem } from "@chakra-ui/react";
import { COLORS } from "../../theme/colors";

const ProfileButton = ({
  text,
  onClick,
  isLoading,
}: {
  text: string;
  onClick?: () => void;
  isLoading?: boolean;
}) => (
  <GridItem
    w="100%"
    as={Button}
    size={"sm"}
    variant={"outline"}
    color={COLORS.PRIMARY_FONT}
    onClick={onClick}
    isLoading={isLoading}
  >
    {text}
  </GridItem>
);

export default ProfileButton;
