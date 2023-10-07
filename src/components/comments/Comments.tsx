import { useParams } from "react-router-dom";
import { usePost } from "../../hooks/postHooks";
import Review from "../posts/Review";
import { useAuth } from "../../hooks/authHooks";
import NewCommentForm from "./NewCommentForm";

const Comments = () => {
  const { id } = useParams();
  const { post } = usePost(id);
  const { user } = useAuth();
  const isLoaded = !!user && !!post;
  return (
    isLoaded && (
      <>
        <Review review={post} user={user}>
          <NewCommentForm user={user} post={post} />
        </Review>
      </>
    )
  );
};

export default Comments;
