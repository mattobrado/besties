import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { ROUTES } from "../../lib/constants";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../lib/firebase";
import LoadingScreen from "../LoadingScreen";
import { BottomNavBar } from "./BottomNavBar";
import TopNavBar from "./TopNavBar";

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
      <TopNavBar />
      {isLoading ? <LoadingScreen /> : <Outlet />}
      <BottomNavBar />
    </>
  );
};

export default Layout;
