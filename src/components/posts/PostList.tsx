import { Text } from "@chakra-ui/react";
import { ContentContext } from "src/context";
import { useContext } from "react";
import { Review, Comment } from "src/components/posts";
import type { PostType } from "src/lib";

export const PostList = ({ posts }: { posts: PostType[] }) => {
  const content = useContext(ContentContext);
  return (
    <>
      {posts?.length === 0 ? (
        <Text textAlign="center" fontSize="lg">
          {content.noActivity}
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
