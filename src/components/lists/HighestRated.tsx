import { useHighestRated } from "../../hooks/userHooks";
import UserList from "../profile/UserList";
import { Center, Divider, Heading } from "@chakra-ui/react";
import { COLORS } from "../../theme/colors";
import { content } from "../../lib/content/bestiesContent";

const HighestRated = () => {
  const { users } = useHighestRated();
  return (
    <>
      <Center>
        <Heading color={COLORS.BRAND} size={"xl"}>
          <i>{content.lists.highestRatedHeading}</i>
        </Heading>
      </Center>
      <Divider mb={3} />
      {users && <UserList users={users} showRating={true} showRanking={true} />}
    </>
  );
};

export default HighestRated;
