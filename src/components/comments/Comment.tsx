import { PostType, UserType } from "../../lib/types";
import OneUserPost from "../posts/OneUserPost";

const Comment = ({
  post,
  user,
  children,
  hideCommentButton,
}: {
  post: PostType;
  user: UserType;
  children?: React.ReactNode;
  hideCommentButton?: boolean;
}) => (
  <OneUserPost
    children={children}
    currentUser={user}
    hideCommentButton={hideCommentButton}
    post={post}
  />
);
export default Comment;
