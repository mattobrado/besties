import {
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
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

export default function Profile() {
  const { id } = useParams();
  // const { posts, isLoading: postsLoading } = usePosts({ uid: id });
  const { user, isLoading: userLoading } = useUser(id);
  const { user: authUser, isLoading: authLoading } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isLoaded = authUser && !!user;
  if (user) user.rating = 4.5;

  return (
    isLoaded && (
      <>
        <Stack spacing="2">
          <Stack alignItems={"center"}>
            <Avatar size="2xl" user={user} />
            <Stack spacing={0} alignItems={"center"}>
              <Text fontSize={"4xl"}>
                {user.rating ? user.rating.toPrecision(2) : "no reviews yet"}{" "}
                {getStars(user.rating)}
              </Text>
              <Text fontSize="2xl">
                <b>{user.fullName}</b>
              </Text>
              <Text color="gray.700">
                Joined: {format(user.date, "MMMM YYY")}
              </Text>
            </Stack>
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
                edit profile
              </GridItem>
              <GridItem
                w="100%"
                as={Button}
                size={"sm"}
                variant={"outline"}
                color={COLORS.PRIMARY_FONT}
              >
                share profile
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
        </Stack>
      </>
    )
  );
}
