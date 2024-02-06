import { useContext } from "react";
import AuthUserContext from "../AuthUserContext";
import Avatar from "../../profile/Avatar";

const AvatarNavBarItem = () => {
  const authUser = useContext(AuthUserContext);

  return <Avatar user={authUser} avatarProps={{ size: "md" }} />;
};

export default AvatarNavBarItem;
