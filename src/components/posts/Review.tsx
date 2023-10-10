import { content } from "../../lib/content";
import { PostType, UserType } from "../../lib/types";
import getStars from "../../utils/getStars";
import TwoUserPost from "./TwoUserPost";

const Review = ({
  post,
  authUser,
  children,
  hideCommentButton,
}: {
  post: PostType;
  authUser: UserType;
  children?: React.ReactNode;
  hideCommentButton?: boolean;
}) => (
  <TwoUserPost
    children={children}
    currentUser={authUser}
    hideCommentButton={hideCommentButton}
    post={post}
    subjectLineText={getStars(post.rating)}
    verb={content.post.reviewed}
  />
);
export default Review;
