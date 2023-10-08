import { useAuth } from "../../hooks/authHooks";
import { usePosts } from "../../hooks/postHooks";
import LoadingScreen from "../LoadingScreen";
import PostList from "../posts/PostList";

const Home = () => {
  const { posts } = usePosts({});
  const { user } = useAuth();

  return user && posts ? (
    <PostList posts={posts.filter((post) => post.isReview)} user={user} />
  ) : (
    <LoadingScreen />
  );
};

export default Home;
