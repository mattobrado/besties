import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/authHooks";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../lib/firebase";
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
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("uid", uid);
      } else {
        console.log("user is logged out");
      }
    });
  }, []);

  useEffect(() => {
    if (!isLoading && pathname.startsWith(ROUTES.PROTECTED) && !user) {
      navigate(ROUTES.LOGIN);
    }
  }, [pathname, user, isLoading]);

  return (
    <>
      <Container px={5}>
        <TopNavBar />
        <Box pb={24}>{isLoading ? <LoadingScreen /> : <Outlet />}</Box>
        <BottomNavBar />
      </Container>
    </>
  );
};

export default Layout;
