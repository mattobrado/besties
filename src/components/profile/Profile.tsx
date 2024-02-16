import { Center, Grid, Stack, Text } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useFriendRequest, useUser } from "src/hooks/userHooks";
import { useAuth } from "src/hooks";
import {
  AvatarInAvatar,
  ProfileButton,
  ProfilePosts,
  SpotifySong,
} from "src/components/profile";
import { ROUTES, getStars } from "src/lib";

export const Profile = () => {
  const { id } = useParams();
  const { user } = useUser(id);
  const { authUser } = useAuth();
  const navigate = useNavigate();
  const { sendFriendRequest, isLoading: isFriendRequestLoading } =
    useFriendRequest();

  const isLoaded = authUser && !!user;

  return (
    isLoaded && (
      <Stack spacing="1">
        <Center>
          <AvatarInAvatar user={user} bestFriend={user}></AvatarInAvatar>
        </Center>
        <Stack spacing={0} alignItems={"center"}>
          <Text fontSize={"3xl"}>
            {user.ratingCount === 0
              ? "no reviews yet"
              : user.rating?.toPrecision(2) + " " + getStars(user.rating)}
          </Text>
          <Text fontSize="xl">
            <b>{user.fullName}</b>
          </Text>
          {/* <Text color="gray.700">joined: {format(user.date, "MMMM YYY")}</Text> */}
        </Stack>
        <Grid templateColumns="repeat(2, 1fr)" gap={2}>
          {authUser.id === user.id
            ? [
                <ProfileButton
                  text={"✏️ edit"}
                  onClick={() =>
                    navigate(`${ROUTES.EDIT_PROFILE}/${authUser.id}`)
                  }
                  key={"edit"}
                />,
                <ProfileButton text={"💌 share"} key={"share"} />,
              ]
            : [
                <ProfileButton
                  text={"+ add friend"}
                  key={"addFriend"}
                  onClick={() =>
                    sendFriendRequest({
                      authUid: authUser.id,
                      targetUid: user.id,
                    })
                  }
                  isLoading={isFriendRequestLoading}
                />,
                <ProfileButton text={"boost"} key={"boost"} />,
              ]}
        </Grid>
        {user.favoriteSongId && <SpotifySong id={user.favoriteSongId} />}
        <ProfilePosts uid={user.id} />
      </Stack>
    )
  );
};
