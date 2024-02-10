import { useContext } from "react";
// import BackgroundContext from "../../BackGroundContext";
import ConfigContext from "../layout/ConfigProvider";
import {
  Heading,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  useToast,
} from "@chakra-ui/react";
import ContentContext from "../layout/ContentProvider";
import MainImage from "./MainImage";
import PostFeed from "../posts/PostFeed";

const Home = () => {
  // const setBackground = useContext(BackgroundContext);
  const config = useContext(ConfigContext);
  const content = useContext(ContentContext);
  // useEffect(() => setBackground(), []);
  const toast = useToast();
  toast.closeAll();

  return (
    <>
      <MainImage />
      <Stack p={4} spacing={2}>
        <Heading color={"pink.500"}>{content.home.heading}</Heading>
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
