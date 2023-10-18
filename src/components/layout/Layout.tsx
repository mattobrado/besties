import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/authHooks";
import LoadingScreen from "../LoadingScreen";
import { BottomNavBar } from "./BottomNavBar";
import TopNavBar from "./TopNavBar";
import { ROUTES } from "../../lib/routes";
import { Box, Container } from "@chakra-ui/react";

const Layout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && pathname.startsWith(ROUTES.PROTECTED) && !user) {
      navigate(ROUTES.LOGIN);
    }
  }, [pathname, user, isLoading]);

  return (
    <>
      <Container px={4}>
        <TopNavBar />
        <Box pb={24}>{isLoading ? <LoadingScreen /> : <Outlet />}</Box>
        <BottomNavBar />
      </Container>
    </>
  );
};

export default Layout;
