import { Box, Image, Link } from "@chakra-ui/react";
import { LOGO_HEIGHT, ROUTES } from "../../lib/constants";
import { useContext } from "react";
import ContentContext from "../../context/ContentProvider";
import { Link as ReactRouterLink } from "react-router-dom";

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
