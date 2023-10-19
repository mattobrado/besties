import { Container } from "@chakra-ui/react";
import { COLORS } from "../../theme/colors";
import AvatarAndFullName from "./AvatarAndFullName";
import { UserType } from "../../lib/types";

const UserCard = ({
  user,
  onClick,
}: {
  user: UserType;
  isLink?: boolean;
  onClick?: () => void;
}) => (
  <Container
    borderWidth={"1px"}
    borderColor={user.favoriteColor ?? COLORS.PRIMARY_FONT}
    borderRadius={"md"}
    py={2}
    onClick={onClick}
  >
    <AvatarAndFullName user={user} size={"md"} isLink={!onClick} />
  </Container>
);

export default UserCard;
