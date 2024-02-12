import { createBrowserRouter } from "react-router-dom";
import { Home } from "src/components";
import { PhoneAuth } from "src/components/auth";
import {
  ApplicantPortal,
  Layout,
  ProtectedPageContainer,
} from "src/components/layout";
import { Registration, RegistrationSteps } from "src/components/registration";
import { Search } from "src/components/search";
import { ROUTES } from "src/lib";

export const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <Layout />,
    children: [
      { path: ROUTES.HOME, element: <Home /> },
      {
        path: ROUTES.LOGIN,
        element: <PhoneAuth />,
      },

      {
        path: ROUTES.PROTECTED,
        element: <ProtectedPageContainer />,
        children: [
          {
            path: ROUTES.MEMBERS,
            element: <Search />,
          },
        ],
      },
    ],
  },
  {
    path: ROUTES.REGISTER,
    element: <Registration />,
    children: [{ path: ROUTES.REGISTRATION, element: <RegistrationSteps /> }],
  },
  { path: ROUTES.APPLICATION_STATUS, element: <ApplicantPortal /> },
]);
