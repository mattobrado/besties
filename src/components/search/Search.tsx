import algoliasearch from "algoliasearch/lite";
import AvatarAndFullName from "../profile/AvatarAndFullName";
import { UserType } from "../../lib/types";
import { Container, Stack } from "@chakra-ui/react";
import { InstantSearch, useHits } from "react-instantsearch";
import { COLORS } from "../../theme/colors";
import CustomSearchBox from "./CustomSearchBox";

const Search = ({ onClick }: { onClick?: () => void }) => {
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
        <CustomSearchBox />
        <CustomHits onClick={onClick} />
      </Stack>
    </InstantSearch>
  );
};

function CustomHits({ onClick }: { onClick?: () => void }) {
  const { hits: users } = useHits();

  return (
    <Stack>
      {(users as unknown as UserType[]).map((user) => (
        <Container
          borderWidth={"1px"}
          borderColor={COLORS.PRIMARY_FONT}
          borderRadius={"md"}
          py={2}
          key={user.id}
          onClick={onClick}
        >
          <AvatarAndFullName user={user} size={"md"} isLink={!onClick} />
        </Container>
      ))}
    </Stack>
  );
}
export default Search;
