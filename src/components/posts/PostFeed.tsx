import { usePosts } from "../../hooks/postHooks";
import LoadingScreen from "../LoadingScreen";
import PostList from "./PostList";

const PostFeed = () => {
  const { posts } = usePosts();

  return posts ? (
    <PostList posts={posts.filter((post) => post.isReview)} />
  ) : (
    <LoadingScreen />
  );
};

export default PostFeed;
