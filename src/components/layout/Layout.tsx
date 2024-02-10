import { Outlet } from "react-router-dom";
import { Box, Container } from "@chakra-ui/react";
import { useContext } from "react";
import { ConfigContext } from "src/context";
import { BOTTOM_NAV_HEIGHT, GLOBAL_PX } from "src/lib/constants";
import { BottomNavBar, Logo, TopNavBar } from "src/components/layout";

const Layout = () => {
  const config = useContext(ConfigContext);

  return (
    <Container px={GLOBAL_PX} layerStyle="white">
      <Logo />
      <TopNavBar />
      <Box pb={BOTTOM_NAV_HEIGHT}>
        <Outlet />
      </Box>
      {config.showBottomNavBar && <BottomNavBar />}
    </Container>
  );
};

export default Layout;
