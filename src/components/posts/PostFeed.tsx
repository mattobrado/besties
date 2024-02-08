import { useContext } from "react";
import { usePosts } from "../../hooks/postHooks";
import LoadingScreen from "../LoadingScreen";
import AuthUserContext from "../layout/AuthUserContext";
import PostList from "./PostList";

const PostFeed = () => {
  const { posts } = usePosts();
  const authUser = useContext(AuthUserContext);

  return posts ? (
    <PostList
      posts={posts.filter((post) => post.isReview)}
      authUser={authUser}
    />
  ) : (
    <LoadingScreen />
  );
};

export default PostFeed;
