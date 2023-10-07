const getStars = (num: number) => {
  if (num >= 4.75) return "⭐️⭐️⭐️⭐️⭐️";
  if (num >= 4.25) return "⭐️⭐️⭐️⭐️½";
  if (num >= 3.75) return "⭐️⭐️⭐️⭐️";
  if (num >= 3.25) return "⭐️⭐️⭐️½";
  if (num >= 2.75) return "⭐️⭐️⭐️";
  if (num >= 2.25) return "⭐️⭐️½";
  if (num >= 1.75) return "⭐️⭐️";
  if (num >= 1.25) return "⭐️½";
  if (num >= 0.75) return "⭐️";
  if (num >= 0.25) return "½";
  return "❌";
};

export default getStars;
