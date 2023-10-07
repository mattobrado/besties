import { usePosts } from "../../hooks/postHooks";
import LoadingScreen from "../LoadingScreen";
import PostList from "../posts/PostList";

const Home = () => {
  const { posts, isLoading } = usePosts();
  return isLoading ? <LoadingScreen /> : <PostList posts={posts} />;
};

export default Home;
