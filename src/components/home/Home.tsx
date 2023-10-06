import { useReviews } from "../../hooks/reviewHooks";
import { ReviewType } from "../../lib/types";
import LoadingScreen from "../LoadingScreen";
import ReviewList from "../review/ReviewList";

const Home = () => {
  const { reviews, isLoading } = useReviews();
  return isLoading ? (
    <LoadingScreen />
  ) : (
    <ReviewList reviews={reviews as ReviewType[]} />
  );
};

export default Home;
