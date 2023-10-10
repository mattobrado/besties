import { UserType } from "../../lib/types";
import Avatar from "./Avatar";

const AvatarInAvatar = ({
  user,
  bestFriend,
}: {
  user: UserType;
  bestFriend: UserType;
}) => (
  <Avatar user={user} avatarProps={{ position: "relative", size: "2xl" }}>
    <Avatar
      avatarProps={{
        position: "absolute",
        size: "md",
        bottom: 0,
        right: 0,
        showBorder: true,
      }}
      user={bestFriend}
    />
  </Avatar>
);

export default AvatarInAvatar;
