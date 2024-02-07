import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/authHooks";
import { ROUTES, TOAST_PROPS } from "../../lib/constants";
import AuthUserContext from "./AuthUserContext";
import LoadingScreen from "../LoadingScreen";
import { useToast } from "@chakra-ui/react";

const ProtectedPageContainer = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { authUser, isLoading } = useAuth();
  const toast = useToast();
  const { state } = useLocation();

  useEffect(() => {
    if (!isLoading && pathname.startsWith(ROUTES.PROTECTED)) {
      if (!authUser) {
        toast({
          title: state?.toastTitle,
          status: "error",
          ...TOAST_PROPS,
        });
        navigate(ROUTES.LOGIN);
      } else if (!authUser.isGenius && !pathname.startsWith(ROUTES.IQ_TEST)) {
        toast({
          title:
            "You must take the Genius IQ Test before you can access members-only content",
          status: "error",
          ...TOAST_PROPS,
        });
        navigate(ROUTES.IQ_TEST);
      }
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
