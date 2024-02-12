import { useContext } from "react";
import { TwoUserPost } from "src/components/posts";
import { ContentContext } from "src/context";
import { getStars, type PostType } from "src/lib";

const Review = ({
  post,
  children,
  hideCommentButton,
}: {
  post: PostType;
  children?: React.ReactNode;
  hideCommentButton?: boolean;
}) => {
  const content = useContext(ContentContext);
  return (
    <TwoUserPost
      children={children}
      hideCommentButton={hideCommentButton}
      post={post}
      subjectLineText={getStars(post.rating)}
      verb={content.post.reviewed}
    />
  );
};
export default Review;
