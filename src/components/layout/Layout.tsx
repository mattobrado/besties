import { Outlet } from "react-router-dom";
import { BottomNavBar } from "./BottomNavBar";
import TopNavBar from "./TopNavBar";
import { Box, Container } from "@chakra-ui/react";
import { BOTTOM_NAV_HEIGHT, GLOBAL_PX } from "../../lib/constants";
import { useContext } from "react";
import ConfigContext from "../../context/ConfigProvider";
import Logo from "./Logo";

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
