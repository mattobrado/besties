import { HStack, Skeleton, Text } from "@chakra-ui/react";
import AvatarAndFullName from "../profile/AvatarAndFullName";
import { useUser } from "../../hooks/userHooks";
import PostBody from "./PostBody";
import { PostType } from "../../lib/types";
import TimeStamp from "./TimeStamp";
import { POST_HEADER_SIZE } from "../../lib/constants";

const TwoUserPost = ({
  children,
  hideCommentButton,
  post,
  subjectLineText,
  verb,
}: {
  children?: React.ReactNode;
  hideCommentButton?: boolean;
  post: PostType;
  subjectLineText: string;
  verb: string;
}) => {
  const { posterUid, targetUid, date } = post;
  if (!targetUid) return;
  const { user: poster } = useUser(posterUid);
  const { user: target } = useUser(targetUid);

  const isLoaded = poster && !!target;

  return (
    <Skeleton isLoaded={isLoaded} variant={"custom"}>
      <PostBody
        header={
          isLoaded && (
            <HStack>
              <AvatarAndFullName user={poster} size={POST_HEADER_SIZE} />
              <Text fontSize={POST_HEADER_SIZE}>{verb}</Text>
              <AvatarAndFullName user={target} size={POST_HEADER_SIZE} />
            </HStack>
          )
        }
        subjectLine={
          <HStack>
            <Text fontSize="sm">{subjectLineText}</Text>
            <TimeStamp textProps={{ fontSize: "xs" }} date={date} />
          </HStack>
        }
        post={post}
        children={children}
        hideCommentButton={hideCommentButton}
      />
    </Skeleton>
  );
};

export default TwoUserPost;
