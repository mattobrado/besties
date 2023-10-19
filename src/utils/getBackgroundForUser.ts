import { UserType } from "../lib/types";
import { BACKGROUNDS } from "../theme/colors";

const getBackgroundForUser = ({ user }: { user?: UserType }) => {
  const color = user?.favorites?.color;
  if (!color) return BACKGROUNDS.default;
  return BACKGROUNDS[color];
};

export default getBackgroundForUser;
