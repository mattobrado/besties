import { Outlet } from "react-router-dom";
import { BottomNavBar } from "./BottomNavBar";
import TopNavBar from "./TopNavBar";
import { Box, Container, Image } from "@chakra-ui/react";
import { BOTTOM_NAV_HEIGHT, GLOBAL_PX, LOGO_HEIGHT } from "../../lib/constants";
// import { BACKGROUNDS } from "../../theme/colors";
// import getBackground from "../../utils/getBackground";
// import BackgroundContext from "../../BackGroundContext";
import ContentContext from "./ContentProvider";
import { THE_GENIUS_PROGRAM_CONTENT } from "../../lib/content/theGeniusProgramContent";
import THE_GENIUS_PROGRAM_CONFIG from "../../lib/content/theGeniusProgramConfig";
import ConfigContext from "./ConfigProvider";

const Layout = () => {
  // const [background, setBackground] = useState(BACKGROUNDS.default);

  // const setBackgroundForUser = (color?: string) => {
  //   setBackground(getBackground(color));
  // };

  const content = THE_GENIUS_PROGRAM_CONTENT;
  const config = THE_GENIUS_PROGRAM_CONFIG;

  return (
    <Box
      minHeight="100vh"
      // style={{
      //   background: background,
      // }}
    >
      {/* <BackgroundContext.Provider value={setBackgroundForUser}> */}
      <ConfigContext.Provider value={THE_GENIUS_PROGRAM_CONFIG}>
        <ContentContext.Provider value={content as any}>
          <Container px={GLOBAL_PX}>
            <Box p={4}>
              <Image src={content.navBar.logoSrcURL} h={LOGO_HEIGHT} />
            </Box>
            <TopNavBar />
            <Box pb={BOTTOM_NAV_HEIGHT}>
              <Outlet />
            </Box>
            {config.showBottomNavBar && <BottomNavBar />}
          </Container>
        </ContentContext.Provider>
      </ConfigContext.Provider>
      {/* </BackgroundContext.Provider> */}
    </Box>
  );
};

export default Layout;
