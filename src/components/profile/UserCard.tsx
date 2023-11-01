import { Center, Container, Flex, Spacer } from "@chakra-ui/react";
import AvatarAndFullName from "./AvatarAndFullName";
import { UserType } from "../../lib/types";
import { content } from "../../lib/content";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import BackgroundContext from "../../BackGroundContext";
import { ROUTES } from "../../lib/routes";

const UserCard = ({
  user,
  onClick,
  showRating = false,
  ranking,
}: {
  user: UserType;
  isLink?: boolean;
  onClick?: () => void;
  showRating?: boolean;
  ranking?: number;
}) => {
  const navigate = useNavigate();
  const setBackground = useContext(BackgroundContext);
  return (
    <Container
      borderWidth={"1px"}
      borderRadius={"md"}
      px={3}
      py={2}
      onClick={
        onClick
          ? onClick
          : () => {
              setBackground(user.favoriteColor);
              navigate(`${ROUTES.PROFILE}/${user.id}`);
            }
      }
    >
      <Flex>
        {ranking && (
          <Center fontSize={"2xl"} mr={3}>
            #{ranking}
          </Center>
        )}
        <AvatarAndFullName user={user} size={"md"} isLink={false} />
        <Spacer />
        {showRating && (
          <Center fontSize={"2xl"}>
            {user.rating?.toPrecision(2) ?? "?"} {content.starEmoji}
          </Center>
        )}
      </Flex>
    </Container>
  );
};

export default UserCard;
