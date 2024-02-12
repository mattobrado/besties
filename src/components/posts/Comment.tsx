import { OneUserPost } from "src/components/posts";
import type { PostType } from "src/lib/types";

const Comment = ({
  post,
  children,
}: {
  post: PostType;
  children?: React.ReactNode;
}) => <OneUserPost children={children} hideCommentButton={true} post={post} />;
export default Comment;
