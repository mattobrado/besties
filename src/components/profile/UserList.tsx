import { Grid } from "@chakra-ui/react";
import { UserCard } from "src/components/profile";
import type { UserType } from "src/lib";

export const UserList = ({
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
  <>
    <Grid templateColumns="repeat(2, 1fr)" gap={2} px={1}>
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
    </Grid>
  </>
);
