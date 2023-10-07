import { Box, Text } from "@chakra-ui/react";
import { PostType } from "../../lib/types";
import Review from "./Review";
import { content } from "../../lib/content";

export const PostList = ({ posts }: { posts: PostType[] }) => {
  return (
    <Box alignContent={"center"}>
      {posts?.length === 0 ? (
        <Text textAlign="center" fontSize="xl">
          {content.activity.noActivity}
        </Text>
      ) : (
        posts?.map((post) => <Review key={post.id} review={post} />)
      )}
    </Box>
  );
};

export default PostList;
