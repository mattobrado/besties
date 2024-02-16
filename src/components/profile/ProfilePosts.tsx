import { Container } from "@chakra-ui/react";
import { PostList } from "src/components/posts";
import { ProfileHeading } from "src/components/profile";
import { usePostsForProfile } from "src/hooks";

export const ProfilePosts = ({ uid }: { uid: string }) => {
  const { posts } = usePostsForProfile(uid);

  return (
    <Container>
      <ProfileHeading text={"activity"} />
      {posts && <PostList posts={posts.filter((post) => post.isReview)} />}
    </Container>
  );
};
