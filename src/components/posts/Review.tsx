import { PostType, UserType } from "../../lib/types";
import getStars from "../../utils/getStars";
import PostView from "./PostView";

const Review = ({
  review,
  user,
  children,
  hideCommentButton,
}: {
  review: PostType;
  user: UserType;
  children?: React.ReactNode;
  hideCommentButton?: boolean;
}) => {
  const { text, date, uid: reviewerId, rating } = review;
  return (
    <PostView
      children={children}
      currentUser={user}
      date={date}
      hideCommentButton={hideCommentButton}
      post={review}
      revieweeId={reviewerId}
      reviewerId={reviewerId}
      subjectLineText={getStars(rating)}
      text={text}
    />
  );
};

export default Review;
