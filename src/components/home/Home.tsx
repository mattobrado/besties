import { useContext, useEffect } from "react";
import { useAuth } from "../../hooks/authHooks";
import { usePosts } from "../../hooks/postHooks";
import LoadingScreen from "../LoadingScreen";
import PostList from "../posts/PostList";
import BackgroundContext from "../../BackGroundContext";

const Home = () => {
  const { posts } = usePosts();
  const { user } = useAuth();
  const setBackground = useContext(BackgroundContext);
  useEffect(() => setBackground({}), []);

  return user && posts ? (
    <PostList posts={posts.filter((post) => post.isReview)} authUser={user} />
  ) : (
    <LoadingScreen />
  );
};

export default Home;
