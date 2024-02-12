import { Text } from "@chakra-ui/react";
import { PostType } from "../../lib/types";
import Review from "./Review";
import { bestiesContent } from "../../lib/content/bestiesContent";
import Comment from "./Comment";

export const PostList = ({ posts }: { posts: PostType[] }) => {
  return (
    <>
      {posts?.length === 0 ? (
        <Text textAlign="center" fontSize="lg">
          {bestiesContent.activity.noActivity}
        </Text>
      ) : (
        posts?.map((post) =>
          post.isReview ? (
            <Review key={post.id} post={post} />
          ) : post.isComment ? (
            <Comment key={post.id} post={post} />
          ) : (
            <></>
          )
        )
      )}
    </>
  );
};

export default PostList;
