import { Text } from "@chakra-ui/react";
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
    <>
      {posts?.length === 0 ? (
        <Text textAlign="center" fontSize="xl">
          {content.activity.noActivity}
        </Text>
      ) : (
        posts?.map((post) =>
          post.isReview ? (
            <Review key={post.id} review={post} user={user} />
          ) : (
            <></>
          )
        )
      )}
    </>
  );
};

export default PostList;
