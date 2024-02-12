import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Box, useToast } from "@chakra-ui/react";
import { useAuth } from "src/hooks";
import { LoadingScreen } from "src/components";
import { ROUTES, TOAST_PROPS } from "src/lib";

const ProtectedPageContainer = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { authUser, isLoading } = useAuth();
  const toast = useToast();

  useEffect(() => {
    if (!isLoading && pathname.startsWith(ROUTES.PROTECTED)) {
      if (!authUser?.isApplicationSubmitted) {
        toast({
          title:
            "You must complete the Genius IQ Test before you can access members-only content",
          status: "error",
          ...TOAST_PROPS,
        });
        navigate(ROUTES.REGISTER);
      } else if (!authUser?.isMember) {
        toast({
          title:
            "You must complete the Genius IQ Test before you can access members-only content",
          status: "error",
          ...TOAST_PROPS,
        });
        navigate(ROUTES.APPLICATION_STATUS);
      }
    }
  }, [pathname, authUser, isLoading]);
  return (
    <Box px={2} py={4} bg={"white"} minHeight="100vh">
      {authUser && isLoading ? <LoadingScreen /> : <Outlet />}
    </Box>
  );
};

export default ProtectedPageContainer;
