import {
  Button,
  Divider,
  Flex,
  HStack,
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

export default function Profile() {
  const { id } = useParams();
  // const { posts, isLoading: postsLoading } = usePosts({ uid: id });
  const { user, isLoading: userLoading } = useUser(id);
  const { user: authUser, isLoading: authLoading } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isLoaded = authUser && !!user;

  return isLoaded ? (
    <Stack spacing="5">
      <Flex p={["4", "6"]} pos="relative" align="center">
        <Avatar size="2xl" user={user} />

        {!authLoading && authUser.id === user.id && (
          <Button
            pos="absolute"
            mb="2"
            top="6"
            right="6"
            colorScheme="teal"
            onClick={onOpen}
          >
            Change avatar
          </Button>
        )}

        <Stack ml="10">
          <Text fontSize="2xl">{user.username}</Text>
          <HStack spacing="10">
            {/* <Text color="gray.700" fontSize={["sm", "lg"]}>
              Posts: {posts.length}
            </Text> */}
            <Text color="gray.700" fontSize={["sm", "lg"]}>
              Likes: todo!
            </Text>
            <Text color="gray.700" fontSize={["sm", "lg"]}>
              Joined: {format(user.date, "MMMM YYY")}
            </Text>
          </HStack>
        </Stack>

        {/* <EditProfile isOpen={isOpen} onClose={onClose} /> */}
      </Flex>
      <Divider />

      {/* {postsLoading ? (
        <Text>Posts are loading...</Text>
      ) : (
        <PostList posts={posts} user={authUser} />
      )} */}
    </Stack>
  ) : (
    false
  );
}
