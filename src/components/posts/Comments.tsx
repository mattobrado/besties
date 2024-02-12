import { useNavigate, useParams } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import { useComments, usePost } from "src/hooks";
import { ROUTES } from "src/lib";
import { PostList, Review } from "src/components/posts";
import NewCommentForm from "src/components/posts/NewCommentForm";

const Comments = () => {
  const { id } = useParams();
  const { post, isLoading } = usePost(id);
  const { comments } = useComments(id);
  const navigate = useNavigate();

  const isLoaded = !!post && !!comments;
  if (!isLoaded && !isLoading) navigate(ROUTES.HOME); // post not found

  return (
    isLoaded && (
      <Review post={post} hideCommentButton={true}>
        <NewCommentForm post={post} />
        <Container>
          <PostList posts={comments} />
        </Container>
      </Review>
    )
  );
};

export default Comments;
