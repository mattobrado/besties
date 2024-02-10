import { HStack, Skeleton } from "@chakra-ui/react";
import AvatarAndFullName from "../profile/AvatarAndFullName";
import { useUser } from "../../hooks/userHooks";
import PostBody from "./PostBody";
import { PostType } from "../../lib/types";
import TimeStamp from "./TimeStamp";
import { POST_HEADER_SIZE } from "../../lib/constants";

const OneUserPost = ({
  children,
  post,
  hideCommentButton,
}: {
  children?: React.ReactNode;
  post: PostType;
  hideCommentButton?: boolean;
}) => {
  const { posterUid, date } = post;
  const { user: poster } = useUser(posterUid);

  const isLoaded = !!poster;

  return (
    <Skeleton isLoaded={isLoaded} variant={"custom"}>
      <PostBody
        header={
          isLoaded && (
            <HStack fontSize={POST_HEADER_SIZE}>
              <AvatarAndFullName user={poster} size={POST_HEADER_SIZE} />
              <TimeStamp
                textProps={{ fontSize: POST_HEADER_SIZE }}
                date={date}
              />
            </HStack>
          )
        }
        post={post}
        children={children}
        hideCommentButton={hideCommentButton}
      />
    </Skeleton>
  );
};

export default OneUserPost;
