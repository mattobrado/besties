import { useContext } from "react";
import {
  Heading,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { MainImage } from "src/components";
import { PostFeed } from "src/components/posts";
import { ConfigContext, ContentContext } from "src/context";

const Home = () => {
  const config = useContext(ConfigContext);
  const content = useContext(ContentContext);

  return (
    <>
      <MainImage />
      <Stack p={4} spacing={2}>
        <Heading>{content.home.heading}</Heading>
        <Text>
          The Genius Program is a highly selective society which provides its
          members with exciting opportunities for intellectual stimulation.
        </Text>
        <Text>Activities include:</Text>
        <UnorderedList pl={7}>
          <ListItem>
            <Text>The lively exchange of ideas through lectures</Text>
          </ListItem>
          <ListItem>
            <Text>Stimulating discussions and debates</Text>
          </ListItem>
          <ListItem>
            <Text>
              Thought-provoking investigations of members' opinions and
              attitudes
            </Text>
          </ListItem>
        </UnorderedList>
        <Text>{config.showPostsOnHomeScreen && <PostFeed />}</Text>
      </Stack>
    </>
  );
};

export default Home;
