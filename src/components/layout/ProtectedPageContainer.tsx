import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/authHooks";
import { ROUTES, TOAST_PROPS } from "../../lib/constants";
import AuthUserContext from "./AuthUserContext";
import LoadingScreen from "../LoadingScreen";
import { Box, useToast } from "@chakra-ui/react";

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
      } else if (!authUser.isMember && !pathname.startsWith(ROUTES.IQ_TEST)) {
        toast({
          title:
            "You must take the Genius IQ Test before you can access members-only content",
          status: "error",
          ...TOAST_PROPS,
        });
        navigate(ROUTES.REGISTRATION);
      }
    }
  }, [pathname, authUser, isLoading]);
  return (
    <Box px={2} py={4} bg={"white"} minHeight="100vh">
      {authUser && (
        <AuthUserContext.Provider value={authUser}>
          {isLoading ? <LoadingScreen /> : <Outlet />}
        </AuthUserContext.Provider>
      )}
    </Box>
  );
};

export default ProtectedPageContainer;
