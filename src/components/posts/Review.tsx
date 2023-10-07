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
  const { text, date, reviewerId, rating } = review;
  return (
    <PostView
      currentUser={user}
      date={date}
      post={review}
      subjectLineText={getStars(rating)}
      text={text}
      revieweeId={reviewerId}
      reviewerId={reviewerId}
      children={children}
      hideCommentButton={hideCommentButton}
    />
  );
};

export default Review;
