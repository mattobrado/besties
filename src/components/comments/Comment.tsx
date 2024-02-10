import { PostType } from "../../lib/types";
import OneUserPost from "../posts/OneUserPost";

const Comment = ({
  post,
  children,
}: {
  post: PostType;
  children?: React.ReactNode;
}) => <OneUserPost children={children} hideCommentButton={true} post={post} />;
export default Comment;
