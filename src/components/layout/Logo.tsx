import { Box, Image, Link } from "@chakra-ui/react";
import { useContext } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { ContentContext } from "src/context";
import { LOGO_HEIGHT, ROUTES } from "src/lib/constants";

const Logo = () => {
  const content = useContext(ContentContext);
  return (
    <Box p={4}>
      <Link to={ROUTES.HOME} as={ReactRouterLink}>
        <Image src={content.navBar.logoSrcURL} h={LOGO_HEIGHT} />
      </Link>
    </Box>
  );
};

export default Logo;
