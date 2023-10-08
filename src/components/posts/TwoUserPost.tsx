import { HStack, Skeleton, Text } from "@chakra-ui/react";
import { content } from "../../lib/content";
import AvatarAndFullName from "../profile/AvatarAndFullName";
import { useUser } from "../../hooks/userHooks";
import PostView from "./PostView";
import { PostType, UserType } from "../../lib/types";

const TwoUserPost = ({
  children,
  currentUser,
  post,
  subjectLineText,
  hideCommentButton,
}: {
  children?: React.ReactNode;
  currentUser: UserType;
  post: PostType;
  subjectLineText: string;
  hideCommentButton?: boolean;
}) => {
  const size = "xs";
  const { text, posterUid, targetUid, date } = post;
  if (!targetUid) return;
  const { user: poster } = useUser(posterUid);
  const { user: target } = useUser(posterUid);

  const isLoaded = poster && !!target;

  return (
    <Skeleton
      startColor="transparent"
      endColor="transparent"
      isLoaded={isLoaded}
    >
      <PostView
        header={
          isLoaded && (
            <HStack>
              <AvatarAndFullName user={poster} size={size} />
              <Text fontSize={size}>{content.post.reviewed}</Text>
              <AvatarAndFullName user={target} size={size} />
            </HStack>
          )
        }
        currentUser={currentUser}
        date={date}
        post={post}
        subjectLineText={subjectLineText}
        text={text}
        children={children}
        hideCommentButton={hideCommentButton}
      />
    </Skeleton>
  );
};

export default TwoUserPost;
