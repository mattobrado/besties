import { HStack, Skeleton, Text } from "@chakra-ui/react";
import { PostBody, TimeStamp } from "src/components/posts";
import { AvatarAndFullName } from "src/components/profile";
import { useUser } from "src/hooks";
import { POST_HEADER_SIZE, type PostType } from "src/lib";

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
