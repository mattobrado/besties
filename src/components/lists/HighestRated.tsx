import { Center, Divider, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { UserList } from "src/components/profile";
import { ContentContext } from "src/context";
import { useHighestRated } from "src/hooks/userHooks";

export const HighestRated = () => {
  const { users } = useHighestRated();
  const content = useContext(ContentContext);
  return (
    <>
      <Center>
        <Heading size={"xl"}>
          <i>{content.lists.highestRatedHeading}</i>
        </Heading>
      </Center>
      <Divider mb={3} />
      {users && <UserList users={users} showRating={true} showRanking={true} />}
    </>
  );
};
