import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  List,
  ListItem,
  OrderedList,
  Skeleton,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Avatar from "./Avatar";
import { format } from "date-fns";
import { usePosts } from "../../hooks/postHooks";
import { useAuth } from "../../hooks/authHooks";
import { useUser } from "../../hooks/userHooks";
import PostList from "../posts/PostList";
import { content } from "../../lib/content";
import { COLORS } from "../../theme/colors";
import getStars from "../../utils/getStars";
import AvatarInAvatar from "./PictureInPicture";
import LoadingScreen from "../LoadingScreen";
import ProfileHeading from "./ProfileHeading";

export default function Profile() {
  const { id } = useParams();
  // const { posts, isLoading: postsLoading } = usePosts({ uid: id });
  const { user, isLoading: userLoading } = useUser(id);
  const { user: authUser, isLoading: authLoading } = useAuth();
  const { posts } = usePosts({});

  // const { isOpen, onOpen, onClose } = useDisclosure();

  const isLoaded = authUser && !!user;
  if (user) user.rating = 4.5;

  return (
    isLoaded && (
      <Stack spacing="3">
        <Center>
          <AvatarInAvatar user={user} bestFriend={user}></AvatarInAvatar>
        </Center>
        <Stack spacing={0} alignItems={"center"}>
          <Text fontSize={"4xl"}>
            {user.rating ? user.rating.toPrecision(2) : "no reviews yet"}{" "}
            {getStars(user.rating)}
          </Text>
          <Text fontSize="2xl">
            <b>{user.fullName}</b>
          </Text>
          {/* <Text color="gray.700">joined: {format(user.date, "MMMM YYY")}</Text> */}
        </Stack>
        {!authLoading && authUser.id === user.id ? (
          <Grid templateColumns="repeat(2, 1fr)" gap={2}>
            <GridItem
              w="100%"
              as={Button}
              size={"sm"}
              variant={"outline"}
              color={COLORS.PRIMARY_FONT}
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
        <Divider />
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
          <ProfileHeading text={"activity"} />
          {posts && (
            <PostList
              posts={posts.filter((post) => post.isReview)}
              user={authUser}
            />
          )}
        </Container>
      </Stack>
    )
  );
}
