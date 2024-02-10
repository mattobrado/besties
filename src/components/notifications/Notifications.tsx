import { Center, Heading, Divider } from "@chakra-ui/react";
import UserList from "../profile/UserList";
import { useFriendRequestUsers } from "../../hooks/userHooks";
import { useAuth } from "../../hooks/authHooks";

const Notifications = () => {
  const { authUser } = useAuth();
  const { users } = useFriendRequestUsers(authUser?.friendRequestsReceivedUids);
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
