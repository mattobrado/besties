import { Container } from "@chakra-ui/react";
import PostList from "../posts/PostList";
import ProfileHeading from "./ProfileHeading";
import { PostType, UserType } from "../../lib/types";
import { usePostsForProfile } from "../../hooks/postHooks";

const ProfilePosts = ({
  authUser,
  uid,
}: {
  authUser: UserType;
  uid: string;
}) => {
  const { posts } = usePostsForProfile(uid);

  return (
    <Container>
      <ProfileHeading text={"activity"} />
      {posts && (
        <PostList
          posts={posts.filter((post) => post.isReview)}
          authUser={authUser}
        />
      )}
    </Container>
  );
};

export default ProfilePosts;
