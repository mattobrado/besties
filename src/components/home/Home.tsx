import { useContext, useEffect } from "react";
import { usePosts } from "../../hooks/postHooks";
import LoadingScreen from "../LoadingScreen";
import PostList from "../posts/PostList";
import BackgroundContext from "../../BackGroundContext";
import AuthUserContext from "../layout/AuthUserContext";
import ConfigContext from "../layout/ConfigProvider";
import {
  Heading,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import ContentContext from "../layout/ContentProvider";
import { HEX_COLORS } from "../../theme/colors";
import MainImage from "./MainImage";

const Home = () => {
  const { posts } = usePosts();
  const setBackground = useContext(BackgroundContext);
  const authUser = useContext(AuthUserContext);
  const config = useContext(ConfigContext);
  const content = useContext(ContentContext);
  useEffect(() => setBackground(), []);

  return (
    <>
      <MainImage />
      <Stack p={4} spacing={2}>
        <Heading
          style={{
            color: `${HEX_COLORS.THE_GENIUS_PROGRAM_PRIMARY}`,
          }}
        >
          {content.home.heading}
        </Heading>
        <Text>
          The Genius Program is a highly selective society which provides its
          members with exciting opportunities for intellectual stimulation.
        </Text>
        <Text>Activities include:</Text>
        <UnorderedList pl={7}>
          <ListItem>The lively exchange of ideas through lectures;</ListItem>
          <ListItem>Stimulating discussions and debates;</ListItem>
          <ListItem>
            Thought-provoking investigations of members' opinions and attitudes.
          </ListItem>
        </UnorderedList>
        {config.showPostsOnHomeScreen &&
          (posts ? (
            <PostList
              posts={posts.filter((post) => post.isReview)}
              authUser={authUser}
            />
          ) : (
            <LoadingScreen />
          ))}
      </Stack>
    </>
  );
};

export default Home;
