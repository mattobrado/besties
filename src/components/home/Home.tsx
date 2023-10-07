import { useReviews } from "../../hooks/reviewHooks";
import { ReviewType } from "../../lib/types";
import LoadingScreen from "../LoadingScreen";
import ActivityList from "../review/ActivityList";

const Home = () => {
  const { reviews, isLoading } = useReviews();
  return isLoading ? (
    <LoadingScreen />
  ) : (
    <ActivityList reviews={reviews as ReviewType[]} />
  );
};

export default Home;
