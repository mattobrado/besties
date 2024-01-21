import { Text } from "@chakra-ui/react";
import { PostType, UserType } from "../../lib/types";
import Review from "./Review";
import { bestiesContent } from "../../lib/content/bestiesContent";
import Comment from "../comments/Comment";

export const PostList = ({
  posts,
  authUser: authUser,
}: {
  posts: PostType[];
  authUser: UserType;
}) => {
  return (
    <>
      {posts?.length === 0 ? (
        <Text textAlign="center" fontSize="lg">
          {bestiesContent.activity.noActivity}
        </Text>
      ) : (
        posts?.map((post) =>
          post.isReview ? (
            <Review key={post.id} post={post} authUser={authUser} />
          ) : post.isComment ? (
            <Comment key={post.id} post={post} user={authUser} />
          ) : (
            <></>
          )
        )
      )}
    </>
  );
};

export default PostList;
