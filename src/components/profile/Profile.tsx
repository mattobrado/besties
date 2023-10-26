import { Center, Grid, Stack, Text } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useUser } from "../../hooks/userHooks";
import getStars from "../../utils/getStars";
import ProfilePosts from "./ProfilePosts";
import AvatarInAvatar from "./AvatarInAvatar";
import { ROUTES } from "../../lib/routes";
import { useContext, useEffect } from "react";
import AuthUserContext from "../layout/AuthUserContext";
import ProfileButton from "./ProfileButton";
import SpotifySong from "./SpotifySong";
import BackgroundContext from "../../BackGroundContext";

const Profile = () => {
  const { id } = useParams();
  const { user } = useUser(id);
  const authUser = useContext(AuthUserContext);
  const navigate = useNavigate();

  const isLoaded = authUser && !!user;

  const setBackground = useContext(BackgroundContext);
  useEffect(() => setBackground(user?.favoriteColor), [user?.favoriteColor]);

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
                <ProfileButton text={"+ add friend"} key={"addFriend"} />,
                <ProfileButton text={"boost"} key={"boost"} />,
              ]}
        </Grid>
        {/* <Container>
          <ProfileHeading text={"besties"} />
          <OrderedList spacing={1}>
            <ListItem>Suck-o-tron</ListItem> <Divider />
            <ListItem>Manthan</ListItem> <Divider />
            <ListItem>Trent</ListItem> <Divider />
            <ListItem>Marlon</ListItem> <Divider />
            <ListItem>myself</ListItem> <Divider />
          </OrderedList>
        </Container> */}
        {user.favoriteSongId && <SpotifySong id={user.favoriteSongId} />}
        <ProfilePosts authUser={authUser} uid={user.id} />
      </Stack>
    )
  );
};
export default Profile;
