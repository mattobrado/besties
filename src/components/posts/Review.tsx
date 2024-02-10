import { bestiesContent } from "../../lib/content/bestiesContent";
import { PostType } from "../../lib/types";
import getStars from "../../utils/getStars";
import TwoUserPost from "./TwoUserPost";

const Review = ({
  post,
  children,
  hideCommentButton,
}: {
  post: PostType;
  children?: React.ReactNode;
  hideCommentButton?: boolean;
}) => (
  <TwoUserPost
    children={children}
    hideCommentButton={hideCommentButton}
    post={post}
    subjectLineText={getStars(post.rating)}
    verb={bestiesContent.post.reviewed}
  />
);
export default Review;
