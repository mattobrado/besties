const getNewRating = ({
  oldRating,
  ratingCount,
  newRating,
  ratingToRemove,
}: {
  oldRating?: number;
  ratingCount: number;
  newRating?: number;
  ratingToRemove?: number;
}) => {
  const unsafeValue = calculateRating({
    oldRating: oldRating ? oldRating : 0,
    ratingCount,
    newRating,
    ratingToRemove,
  });
  return unsafeValue ? unsafeValue : 0;
};

export default getNewRating;

const calculateRating = ({
  oldRating,
  ratingCount,
  newRating,
  ratingToRemove,
}: {
  oldRating: number;
  ratingCount: number;
  newRating?: number;
  ratingToRemove?: number;
}) => {
  if (newRating !== undefined) {
    return (oldRating * ratingCount + newRating) / (ratingCount + 1);
  }
  if (ratingToRemove !== undefined) {
    if (ratingCount === 1) return 0; //divide by zero
    return (oldRating * ratingCount - ratingToRemove) / (ratingCount - 1) ** 2;
  }
  return oldRating;
};
