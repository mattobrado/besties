import { Center, Container, Text, Spacer, Stack } from "@chakra-ui/react";
import type { UserType } from "src/lib/types/index";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "src/lib/constants";
import { Avatar } from "src/components/profile";
import { ContentContext } from "src/context";
import { useContext } from "react";

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
  const content = useContext(ContentContext);

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
              // setBackground(user.favoriteColor);
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
          <Avatar
            user={user}
            avatarProps={{
              size: "xl",
              borderColor: user.favoriteColor,
              borderWidth: 3,
            }}
            isLink={false}
          />
        </Center>

        <Stack spacing={0}>
          <Text fontSize={"sm"} color={"black"}>
            <b>{user?.fullName}</b>
          </Text>
          <Text fontSize={"sm"} color={"black"}>
            {user.bio}
          </Text>
        </Stack>

        <Spacer />
        {showRating && (
          <Center fontSize={"2xl"}>
            {user.rating?.toPrecision(2) ?? "?"} {content.starEmoji}
          </Center>
        )}
      </Stack>
    </Container>
  );
};

export default UserCard;
