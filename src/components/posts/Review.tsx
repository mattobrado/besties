import { PostType, UserType } from "../../lib/types";
import getStars from "../../utils/getStars";
import TwoUserPost from "./TwoUserPost";

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
  const { rating } = review;
  return (
    <TwoUserPost
      children={children}
      currentUser={user}
      hideCommentButton={hideCommentButton}
      post={review}
      subjectLineText={getStars(rating)}
    />
  );
};

export default Review;
