import { useAuth } from "../../hooks/authHooks";
import { usePosts } from "../../hooks/postHooks";
import LoadingScreen from "../LoadingScreen";
import PostList from "../posts/PostList";

const Home = () => {
  const { posts, isLoading: postsLoading } = usePosts();
  const { user, isLoading: userLoading } = useAuth();
  return user && posts ? (
    <PostList posts={posts} user={user} />
  ) : (
    <LoadingScreen />
  );
};

export default Home;
