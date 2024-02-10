import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../components/home/Home";
import PhoneAuth from "../components/auth/PhoneAuth";
import EditProfile from "../components/profile/EditProfile";
import { ROUTES } from "./constants";
import Members from "../components/lists/Members";
import ProtectedPageContainer from "../components/layout/ProtectedPageContainer";
import PostFeed from "../components/posts/PostFeed";
import IQTest from "../components/registration/IQTest";
import RegistrationSteps from "../components/registration/RegistrationSteps";
import ApplicantPortal from "../components/registration/ApplicantPortal";

export const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <Layout />,
    children: [
      { path: ROUTES.HOME, element: <Home /> },
      { path: ROUTES.LOGIN, element: <PhoneAuth /> },

      {
        path: ROUTES.PROTECTED,
        element: <ProtectedPageContainer />,
        children: [
          {
            path: ROUTES.SEARCH,
            element: <Members />,
          },
          { path: ROUTES.POSTS, element: <PostFeed /> },
        ],
      },
    ],
  },
  {
    path: ROUTES.IQ_TEST,
    element: <IQTest />,
    children: [{ path: ROUTES.REGISTRATION, element: <RegistrationSteps /> }],
  },
  { path: ROUTES.APPLICANT, element: <ApplicantPortal /> },
]);
