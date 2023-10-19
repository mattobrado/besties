import algoliasearch from "algoliasearch/lite";
import { UserType } from "../../lib/types";
import { Stack } from "@chakra-ui/react";
import { InstantSearch, useHits } from "react-instantsearch";
import CustomSearchBox from "./CustomSearchBox";
import UserCard from "../profile/UserCard";
import { content } from "../../lib/content";

const Search = ({
  onClick: onClick,
  placeholderText = content.search.search,
}: {
  onClick?: (user: UserType | undefined) => void;
  placeholderText?: string;
}) => {
  return (
    <InstantSearch
      searchClient={algoliasearch(
        "9E9KF2QJL7",
        "6bbefb034be1a0336fdfff567350d0b0"
      )}
      indexName="USERS"
      future={{
        preserveSharedStateOnUnmount: true,
      }}
    >
      <Stack>
        <CustomSearchBox placeholderText={placeholderText} />
        <CustomHits onClick={onClick} />
      </Stack>
    </InstantSearch>
  );
};

function CustomHits({
  onClick: onClick,
}: {
  onClick?: (user: UserType | undefined) => void;
}) {
  const { hits: users } = useHits();

  return (
    <Stack>
      {(users as unknown as UserType[]).map((user) => (
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
        />
      ))}
    </Stack>
  );
}
export default Search;
