import { Text } from "@chakra-ui/react";
import { PostType, UserType } from "../../lib/types";
import { content } from "../../lib/content";
import Review from "../posts/Review";

export const CommentList = ({
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
        posts?.map((post) => <Review key={post.id} review={post} user={user} />)
      )}
    </>
  );
};

export default CommentList;
