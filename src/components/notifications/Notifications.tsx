import { Center, Heading, Divider } from "@chakra-ui/react";
import UserList from "../profile/UserList";
import { useContext } from "react";
import AuthUserContext from "../layout/AuthUserContext";
import { useFriendRequestUsers } from "../../hooks/userHooks";

const Notifications = () => {
  const authUser = useContext(AuthUserContext);
  const { users } = useFriendRequestUsers(authUser.friendRequestsReceivedUids);
  return (
    <>
      <Center>
        <Heading size={"xl"}>
          <i>friend requests</i>
        </Heading>
      </Center>
      <Divider mb={3} />
      {users && <UserList users={users} showRating={true} />}
    </>
  );
};

export default Notifications;
