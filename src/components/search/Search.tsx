import algoliasearch from "algoliasearch/lite";
import { UserType } from "../../lib/types";
import { Stack } from "@chakra-ui/react";
import { InstantSearch, useHits } from "react-instantsearch";
import CustomSearchBox from "./CustomSearchBox";
import { Dispatch, SetStateAction } from "react";
import UserCard from "../profile/UserCard";
import { content } from "../../lib/content";

const Search = ({
  setTargetUser,
  onClose,
  placeholderText = content.search.search,
}: {
  setTargetUser?: Dispatch<SetStateAction<UserType | undefined>>;
  onClose: () => void;
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
        <CustomHits setTargetUser={setTargetUser} onClose={onClose} />
      </Stack>
    </InstantSearch>
  );
};

function CustomHits({
  setTargetUser,
  onClose,
}: {
  setTargetUser?: Dispatch<SetStateAction<UserType | undefined>>;
  onClose: () => void;
}) {
  const { hits: users } = useHits();

  return (
    <Stack>
      {(users as unknown as UserType[]).map((user) => (
        <UserCard
          onClick={
            setTargetUser
              ? () => {
                  setTargetUser(user);
                  onClose();
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
