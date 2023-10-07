import { Box, Text } from "@chakra-ui/react";
import { PostType, UserType } from "../../lib/types";
import Review from "./Review";
import { content } from "../../lib/content";

export const PostList = ({
  posts,
  user,
}: {
  posts: PostType[];
  user: UserType;
}) => {
  return (
    <Box alignContent={"center"}>
      {posts?.length === 0 ? (
        <Text textAlign="center" fontSize="xl">
          {content.activity.noActivity}
        </Text>
      ) : (
        posts?.map((post) => <Review key={post.id} review={post} user={user} />)
      )}
    </Box>
  );
};

export default PostList;
