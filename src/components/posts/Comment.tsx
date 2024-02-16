import { OneUserPost } from "src/components/posts";
import type { PostType } from "src/lib";

export const Comment = ({
  post,
  children,
}: {
  post: PostType;
  children?: React.ReactNode;
}) => <OneUserPost children={children} hideCommentButton={true} post={post} />;
