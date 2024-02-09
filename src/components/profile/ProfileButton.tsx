import { Button, GridItem } from "@chakra-ui/react";

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
    onClick={onClick}
    isLoading={isLoading}
  >
    {text}
  </GridItem>
);

export default ProfileButton;
