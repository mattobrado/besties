import { Box } from "@chakra-ui/react";
import Search from "../search/Search";
import { useContext } from "react";
import ContentContext from "../layout/ContentProvider";

const Members = () => {
  const content = useContext(ContentContext);
  return (
    <Box px={2} py={4} bg={"white"} minHeight="100vh">
      <Search placeholderText={content.search.search} />
    </Box>
  );
};

export default Members;
