import { Center, Container, Flex, Spacer } from "@chakra-ui/react";
import AvatarAndFullName from "./AvatarAndFullName";
import { UserType } from "../../lib/types";
import { content } from "../../lib/content";

const UserCard = ({
  user,
  onClick,
  showRating = false,
  ranking,
}: {
  user: UserType;
  isLink?: boolean;
  onClick?: () => void;
  showRating?: boolean;
  ranking?: number;
}) => (
  <Container
    borderWidth={"1px"}
    borderRadius={"md"}
    px={3}
    py={2}
    onClick={onClick}
  >
    <Flex>
      {ranking && (
        <Center fontSize={"2xl"} mr={3}>
          #{ranking}
        </Center>
      )}
      <AvatarAndFullName user={user} size={"md"} isLink={!onClick} />
      <Spacer />
      {showRating && (
        <Center fontSize={"2xl"}>
          {user.rating?.toPrecision(2)} {content.starEmoji}
        </Center>
      )}
    </Flex>
  </Container>
);

export default UserCard;
