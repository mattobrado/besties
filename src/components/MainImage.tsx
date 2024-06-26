import { useContext } from "react";
import { Image } from "@chakra-ui/react";
import { ContentContext } from "src/context";

export const MainImage = () => {
  const content = useContext(ContentContext);
  return <Image src={content.home.homeScreenImage} h={"208px"} w={"full"} />;
};
