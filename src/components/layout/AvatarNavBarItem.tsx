import { Avatar } from "src/components/profile";
import { useAuth } from "src/hooks";

const AvatarNavBarItem = () => {
  const { authUser } = useAuth();

  return <Avatar user={authUser} avatarProps={{ size: "md" }} />;
};

export default AvatarNavBarItem;
