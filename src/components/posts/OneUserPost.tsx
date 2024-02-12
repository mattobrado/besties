import { HStack, Skeleton } from "@chakra-ui/react";
import { PostBody, TimeStamp } from "src/components/posts";
import { AvatarAndFullName } from "src/components/profile";
import { useUser } from "src/hooks/userHooks";
import { POST_HEADER_SIZE } from "src/lib/constants";
import type { PostType } from "src/lib/types";

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
