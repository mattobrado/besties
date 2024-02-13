import { Outlet } from "react-router-dom";
import { Box, Container, DarkMode } from "@chakra-ui/react";
import { useContext } from "react";
import { ConfigContext } from "src/context";
import { BottomNavBar, Logo, TopNavBar } from "src/components/layout";
import { BOTTOM_NAV_HEIGHT, GLOBAL_PX } from "src/lib";

const Layout = () => {
  const config = useContext(ConfigContext);

  return (
    <DarkMode>
      <Container px={GLOBAL_PX}>
        <Logo />
        <TopNavBar />
        <Box pb={BOTTOM_NAV_HEIGHT}>
          <Outlet />
        </Box>
        {config.showBottomNavBar && <BottomNavBar />}
      </Container>
    </DarkMode>
  );
};

export default Layout;
