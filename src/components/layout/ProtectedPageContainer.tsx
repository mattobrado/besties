import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/authHooks";
import { ROUTES } from "../../lib/constants";
import AuthUserContext from "./AuthUserContext";
import LoadingScreen from "../LoadingScreen";
import { useToast } from "@chakra-ui/react";

const ProtectedPageContainer = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { authUser, isLoading } = useAuth();
  const toast = useToast();

  useEffect(() => {
    if (!isLoading && pathname.startsWith(ROUTES.PROTECTED) && !authUser) {
      toast({
        title: "You must log in to access the members-only area",
        status: "error",
      });
      navigate(ROUTES.LOGIN);
    }
  }, [pathname, authUser, isLoading]);
  return (
    authUser && (
      <AuthUserContext.Provider value={authUser}>
        {isLoading ? <LoadingScreen /> : <Outlet />}
      </AuthUserContext.Provider>
    )
  );
};

export default ProtectedPageContainer;
