import {
  Button,
  Center,
  Container,
  Divider,
  Grid,
  GridItem,
  ListItem,
  OrderedList,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../hooks/authHooks";
import { useUser } from "../../hooks/userHooks";
import { COLORS } from "../../theme/colors";
import getStars from "../../utils/getStars";
import ProfileHeading from "./ProfileHeading";
import ProfilePosts from "./ProfilePosts";
import EditProfile from "./EditProfile";
import AvatarInAvatar from "./AvatarInAvatar";

const Profile = () => {
  const { id } = useParams();
  const { user } = useUser(id);
  const { user: authUser, isLoading: authLoading } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <EditProfile isOpen={isOpen} onClose={onClose} authUser={authUser} />
        {!authLoading && authUser.id === user.id ? (
          <Grid templateColumns="repeat(2, 1fr)" gap={2}>
            <GridItem
              w="100%"
              as={Button}
              size={"sm"}
              variant={"outline"}
              color={COLORS.PRIMARY_FONT}
              onClick={onOpen}
            >
              ✏️ edit
            </GridItem>
            <GridItem
              w="100%"
              as={Button}
              size={"sm"}
              variant={"outline"}
              color={COLORS.PRIMARY_FONT}
            >
              💌 share
            </GridItem>
          </Grid>
        ) : (
          <Grid templateColumns="repeat(2, 1fr)" gap={2}>
            <GridItem
              w="100%"
              as={Button}
              size={"sm"}
              variant={"outline"}
              color={COLORS.PRIMARY_FONT}
            >
              follow
            </GridItem>
            <GridItem
              w="100%"
              as={Button}
              size={"sm"}
              variant={"outline"}
              color={COLORS.PRIMARY_FONT}
            >
              🩷 boost
            </GridItem>
          </Grid>
        )}
        <Container>
          <ProfileHeading text={"besties"} />
          <OrderedList spacing={1}>
            <ListItem>Suck-o-tron</ListItem> <Divider />
            <ListItem>Manthan</ListItem> <Divider />
            <ListItem>Trent</ListItem> <Divider />
            <ListItem>Marlon</ListItem> <Divider />
            <ListItem>myself</ListItem> <Divider />
          </OrderedList>
        </Container>
        <Container>
          <iframe
            src="https://open.spotify.com/embed/track/2qCvsmE9jO1QQQQ1jpndVZ?utm"
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>{" "}
        </Container>
        <ProfilePosts authUser={authUser} uid={user.id} />
      </Stack>
    )
  );
};
export default Profile;
