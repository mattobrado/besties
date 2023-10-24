import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/authHooks";
import LoadingScreen from "../LoadingScreen";
import { BottomNavBar } from "./BottomNavBar";
import TopNavBar from "./TopNavBar";
import { ROUTES } from "../../lib/routes";
import { Box, Container } from "@chakra-ui/react";
import { BOTTOM_NAV_HEIGHT, GLOBAL_PX } from "../../lib/constants";
import AuthUserContext from "./AuthUserContext";

const Layout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { authUser, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && pathname.startsWith(ROUTES.PROTECTED) && !authUser) {
      navigate(ROUTES.ROOT);
    }
  }, [pathname, authUser, isLoading]);

  return (
    authUser && (
      <AuthUserContext.Provider value={authUser}>
        <Container px={GLOBAL_PX}>
          <TopNavBar />
          <Box pb={BOTTOM_NAV_HEIGHT}>
            {isLoading ? <LoadingScreen /> : <Outlet />}
          </Box>
          <BottomNavBar />
        </Container>
      </AuthUserContext.Provider>
    )
  );
};

export default Layout;
