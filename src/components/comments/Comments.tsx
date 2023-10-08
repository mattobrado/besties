import { useNavigate, useParams } from "react-router-dom";
import { usePost } from "../../hooks/postHooks";
import Review from "../posts/Review";
import { useAuth } from "../../hooks/authHooks";
import NewCommentForm from "./NewCommentForm";
import PostList from "../posts/PostList";
import { useComments } from "../../hooks/commentHooks";
import { Container } from "@chakra-ui/react";
import { ROUTES } from "../../lib/routes";

const Comments = () => {
  const { id } = useParams();
  const { post, isLoading } = usePost(id);
  const { user } = useAuth();
  const { comments } = useComments(id);
  const isLoaded = !!user && !!post && !!comments;
  const navigate = useNavigate();
  if (!isLoaded && !isLoading) navigate(ROUTES.HOME);

  return (
    isLoaded && (
      <>
        <Review post={post} user={user} hideCommentButton={true}>
          <NewCommentForm user={user} post={post} />
          <Container>
            <PostList posts={comments} user={user} />
          </Container>
        </Review>
      </>
    )
  );
};

export default Comments;
