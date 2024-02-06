import { useNavigate, useParams } from "react-router-dom";
import { usePost } from "../../hooks/postHooks";
import Review from "../posts/Review";
import NewCommentForm from "./NewCommentForm";
import PostList from "../posts/PostList";
import { useComments } from "../../hooks/commentHooks";
import { Container } from "@chakra-ui/react";
import { useContext } from "react";
import AuthUserContext from "../layout/AuthUserContext";
import { ROUTES } from "../../lib/constants";

const Comments = () => {
  const { id } = useParams();
  const { post, isLoading } = usePost(id);
  const authUser = useContext(AuthUserContext);
  const { comments } = useComments(id);
  const navigate = useNavigate();

  const isLoaded = !!post && !!comments;
  if (!isLoaded && !isLoading) navigate(ROUTES.HOME); // post not found

  return (
    isLoaded && (
      <Review post={post} authUser={authUser} hideCommentButton={true}>
        <NewCommentForm user={authUser} post={post} />
        <Container>
          <PostList posts={comments} authUser={authUser} />
        </Container>
      </Review>
    )
  );
};

export default Comments;
