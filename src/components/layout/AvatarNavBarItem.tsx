import { useAuth } from "../../hooks/authHooks";
import Avatar from "../profile/Avatar";

const AvatarNavBarItem = () => {
  const { authUser } = useAuth();

  return <Avatar user={authUser} avatarProps={{ size: "md" }} />;
};

export default AvatarNavBarItem;
