import { Stack } from "@chakra-ui/react";
import { UserType } from "../../lib/types";
import UserCard from "./UserCard";

const UserList = ({
  users,
  onClick,
  showRating,
  showRanking,
}: {
  users: UserType[];
  onClick?: (user: UserType | undefined) => void;
  showRating?: boolean;
  showRanking?: boolean;
}) => (
  <Stack>
    {(users as unknown as UserType[]).map((user, index) => (
      <UserCard
        onClick={
          onClick
            ? () => {
                onClick(user);
              }
            : undefined
        }
        user={user}
        key={user.id}
        showRating={showRating}
        ranking={showRanking ? index + 1 : undefined}
      />
    ))}
  </Stack>
);

export default UserList;
