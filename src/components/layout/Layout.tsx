import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Layout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname.startsWith("/protected")) {
      navigate("/login");
    }
  }, [pathname]);
  return <Outlet />;
};

export default Layout;
