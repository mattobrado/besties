import { HStack, Skeleton, Text } from "@chakra-ui/react";
import AvatarAndFullName from "../profile/AvatarAndFullName";
import { useUser } from "../../hooks/userHooks";
import PostView from "./PostView";
import { PostType, UserType } from "../../lib/types";
import TimeStamp from "./TimeStamp";

const TwoUserPost = ({
  children,
  currentUser,
  hideCommentButton,
  post,
  subjectLineText,
  verb,
}: {
  children?: React.ReactNode;
  currentUser: UserType;
  hideCommentButton?: boolean;
  post: PostType;
  subjectLineText: string;
  verb: string;
}) => {
  const size = "xs";
  const { posterUid, targetUid, date } = post;
  if (!targetUid) return;
  const { user: poster } = useUser(posterUid);
  const { user: target } = useUser(posterUid);

  const isLoaded = poster && !!target;

  return (
    <Skeleton isLoaded={isLoaded} variant={"custom"}>
      <PostView
        header={
          isLoaded && (
            <HStack>
              <AvatarAndFullName user={poster} size={size} />
              <Text fontSize={size}>{verb}</Text>
              <AvatarAndFullName user={target} size={size} />
            </HStack>
          )
        }
        subjectLine={
          <HStack fontSize="sm">
            <Text>{subjectLineText}</Text>
            <TimeStamp date={date} />
          </HStack>
        }
        currentUser={currentUser}
        post={post}
        children={children}
        hideCommentButton={hideCommentButton}
      />
    </Skeleton>
  );
};

export default TwoUserPost;
