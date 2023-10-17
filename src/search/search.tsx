import algoliasearch from "algoliasearch/lite";
import AvatarAndFullName from "../components/profile/AvatarAndFullName";
import { UserType } from "../lib/types";
import { Container, Divider, Input, InputGroup, Stack } from "@chakra-ui/react";
import { InstantSearch, SearchBox, useHits } from "react-instantsearch";
import { COLORS } from "../theme/colors";

const Search = () => {
  return (
    <InputGroup
      as={InstantSearch}
      searchClient={algoliasearch(
        "9E9KF2QJL7",
        "6bbefb034be1a0336fdfff567350d0b0"
      )}
      indexName="USERS"
    >
      <Input hidden={true} />
      <SearchBox
        classNames={{ input: "chakra-input css-1cjy4zv" }}
        placeholder="search"
      />
      <CustomHits />
    </InputGroup>
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
