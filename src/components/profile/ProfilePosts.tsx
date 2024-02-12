import { Container } from "@chakra-ui/react";
import { PostList } from "src/components/posts";
import ProfileHeading from "src/components/profile/ProfileHeading";
import { usePostsForProfile } from "src/hooks";

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
