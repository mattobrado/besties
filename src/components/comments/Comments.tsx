import { useParams } from "react-router-dom";
import { usePost } from "../../hooks/postHooks";
import Review from "../posts/Review";
import { useAuth } from "../../hooks/authHooks";
import NewCommentForm from "./NewCommentForm";
import PostList from "../posts/PostList";
import { useComments } from "../../hooks/commentHooks";

const Comments = () => {
  const { id } = useParams();
  const { post } = usePost(id);
  const { user } = useAuth();
  const { comments } = useComments(id);
  const isLoaded = !!user && !!post; //&& !!comments;
  return (
    isLoaded && (
      <>
        <Review review={post} user={user} hideCommentButton={true}>
          <NewCommentForm user={user} post={post} />
          {/* <PostList posts={comments} user={user} /> */}
        </Review>
      </>
    )
  );
};

export default Comments;
