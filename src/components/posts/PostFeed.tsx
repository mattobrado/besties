import { LoadingScreen } from "src/components";
import { PostList } from "src/components/posts";
import { usePosts } from "src/hooks/postHooks";

export const PostFeed = () => {
  const { posts } = usePosts();

  return posts ? (
    <PostList posts={posts.filter((post) => post.isReview)} />
  ) : (
    <LoadingScreen />
  );
};
