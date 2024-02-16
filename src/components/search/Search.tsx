import algoliasearch from "algoliasearch/lite";
import { Stack } from "@chakra-ui/react";
import { InstantSearch, useHits } from "react-instantsearch";
import { useContext } from "react";
import { ContentContext } from "src/context";
import { CustomSearchBox } from "src/components/search";
import { UserList } from "src/components/profile";
import type { UserType } from "src/lib";

export const Search = ({
  onClick: onClick,
}: {
  onClick?: (user: UserType | undefined) => void;
}) => {
  const content = useContext(ContentContext);
  const placeholderText = content.lists.search;
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
    <UserList
      users={users.filter((user) => user.isMember) as unknown as UserType[]}
      onClick={onClick}
    />
  );
}
