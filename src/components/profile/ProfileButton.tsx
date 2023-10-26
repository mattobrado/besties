import { Button, GridItem } from "@chakra-ui/react";
import { COLORS } from "../../theme/colors";

const ProfileButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) => (
  <GridItem
    w="100%"
    as={Button}
    size={"sm"}
    variant={"outline"}
    color={COLORS.PRIMARY_FONT}
    onClick={onClick}
  >
    {text}
  </GridItem>
);

export default ProfileButton;
