import { Container } from "@chakra-ui/react";
import PostList from "../posts/PostList";
import ProfileHeading from "./ProfileHeading";
import { usePostsForProfile } from "../../hooks/postHooks";

const ProfilePosts = ({ uid }: { uid: string }) => {
  const { posts } = usePostsForProfile(uid);

  return (
    <Container>
      <ProfileHeading text={"activity"} />
      {posts && <PostList posts={posts.filter((post) => post.isReview)} />}
    </Container>
  );
};

export default ProfilePosts;
