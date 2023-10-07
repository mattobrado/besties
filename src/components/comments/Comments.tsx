import { useParams } from "react-router-dom";
import { usePost } from "../../hooks/postHooks";
import Review from "../posts/Review";
import { useAuth } from "../../hooks/authHooks";
import LoadingScreen from "../LoadingScreen";
import NewCommentForm from "./NewCommentForm";

const Comments = () => {
  const { id } = useParams();
  const { post } = usePost(id);
  const { user } = useAuth();
  return user && post ? (
    <>
      <Review review={post} user={user}></Review>
      <NewCommentForm user={user} post={post} />
    </>
  ) : (
    <LoadingScreen />
  );
};

export default Comments;
