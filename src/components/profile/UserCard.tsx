import { Center, Container, Flex, Text, Spacer, Stack } from "@chakra-ui/react";
import AvatarAndFullName from "./AvatarAndFullName";
import { UserType } from "../../lib/types";
import { bestiesContent } from "../../lib/content/bestiesContent";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import BackgroundContext from "../../BackGroundContext";
import { ROUTES } from "../../lib/constants";
import Avatar from "./Avatar";

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
      <Stack>
        {ranking && (
          <Center fontSize={"2xl"} mr={3}>
            #{ranking}
          </Center>
        )}
        {/* <AvatarAndFullName user={user} size={"md"} isLink={false} /> */}
        <Center>
          <Avatar user={user} avatarProps={{ size: "xl" }} isLink={false} />
        </Center>

        <Text fontSize={"sm"} color={"black"}>
          <b>{user?.fullName}</b>
          <p>{user.bio}</p>
        </Text>

        <Spacer />
        {showRating && (
          <Center fontSize={"2xl"}>
            {user.rating?.toPrecision(2) ?? "?"} {bestiesContent.starEmoji}
          </Center>
        )}
      </Stack>
    </Container>
  );
};

export default UserCard;
