import { useContext, useEffect } from "react";
import { usePosts } from "../../hooks/postHooks";
import LoadingScreen from "../LoadingScreen";
import PostList from "../posts/PostList";
import BackgroundContext from "../../BackGroundContext";
import AuthUserContext from "../layout/AuthUserContext";

const Home = () => {
  const { posts } = usePosts();
  const setBackground = useContext(BackgroundContext);
  const authUser = useContext(AuthUserContext);
  useEffect(() => setBackground(), []);

  return posts ? (
    <PostList
      posts={posts.filter((post) => post.isReview)}
      authUser={authUser}
    />
  ) : (
    <LoadingScreen />
  );
};

export default Home;
