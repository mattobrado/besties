import algoliasearch from "algoliasearch/lite";
import { UserType } from "../../lib/types";
import { Stack } from "@chakra-ui/react";
import { InstantSearch, useHits } from "react-instantsearch";
import CustomSearchBox from "./CustomSearchBox";
import { content } from "../../lib/content";
import UserList from "../profile/UserList";
import { useContext } from "react";
import BackgroundContext from "../../BackGroundContext";

const Search = ({
  onClick: onClick,
  placeholderText = content.search.search,
}: {
  onClick?: (user: UserType | undefined) => void;
  placeholderText?: string;
}) => {
  // const setBackground = useContext(BackgroundContext);
  // setBackground({});
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

  return <UserList users={users as unknown as UserType[]} onClick={onClick} />;
}
export default Search;
