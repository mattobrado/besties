import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/authHooks";
import { ROUTES } from "../../lib/constants";
import AuthUserContext from "./AuthUserContext";
import LoadingScreen from "../LoadingScreen";

const ProtectedPageContainer = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { authUser, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && pathname.startsWith(ROUTES.PROTECTED) && !authUser) {
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
