import algoliasearch from "algoliasearch/lite";
import AvatarAndFullName from "../components/profile/AvatarAndFullName";
import { UserType } from "../lib/types";
import { Container, Stack } from "@chakra-ui/react";
import { InstantSearch, useHits } from "react-instantsearch";
import { COLORS } from "../theme/colors";
import CustomSearchBox from "./CustomSearchBox";

const Search = () => {
  return (
    <InstantSearch
      searchClient={algoliasearch(
        "9E9KF2QJL7",
        "6bbefb034be1a0336fdfff567350d0b0"
      )}
      indexName="USERS"
    >
      <Stack>
        <CustomSearchBox />
        <CustomHits />
      </Stack>
    </InstantSearch>
  );
};

function CustomHits() {
  const { hits } = useHits();

  return (
    <Stack>
      {(hits as unknown as UserType[]).map((hit: UserType) => (
        <Container
          borderWidth={"1px"}
          borderColor={COLORS.PRIMARY_FONT}
          borderRadius={"md"}
          py={2}
        >
          <AvatarAndFullName user={hit} size={"md"} />
        </Container>
      ))}
    </Stack>
  );
}
export default Search;
