import { useContext } from "react";
import ContentContext from "../layout/ContentProvider";
import { Image } from "@chakra-ui/react";

const MainImage = () => {
  const content = useContext(ContentContext);
  return <Image src={content.home.homeScreenImage} h={"208px"} w={"full"} />;
};

export default MainImage;
