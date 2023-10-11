import { UserType } from "../../lib/types";
import Avatar from "./Avatar";
import { Avatar as ChakraAvatar } from "@chakra-ui/react";

const AvatarInAvatar = ({
  user,
  bestFriend,
}: {
  user: UserType;
  bestFriend: UserType;
}) => (
  <ChakraAvatar position={"relative"} size={"2xl"} src={user.avatar}>
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
  </ChakraAvatar>
);

export default AvatarInAvatar;
