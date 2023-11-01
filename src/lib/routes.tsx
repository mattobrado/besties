import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../components/home/Home";
import NewReviewForm from "../components/newReviewForm/NewReviewForm";
import Comments from "../components/comments/Comments";
import Profile from "../components/profile/Profile";
import HighestRated from "../components/lists/HighestRated";
import SearchPage from "../components/search/SearchPage";
import PhoneAuth from "../components/auth/PhoneAuth";
import EditProfile from "../components/profile/EditProfile";
import Notifications from "../components/notifications/Notifications";

const PROTECTED = "/p";

export const ROUTES = {
  PROTECTED,
  ROOT: "/",
  PROFILE: PROTECTED + "/u",
  HIGHEST_RATED: PROTECTED + "/top-users",
  HOME: PROTECTED + "/home",
  POST: PROTECTED + "/post",
  ADD_REVIEW: PROTECTED + "/review",
  SEARCH: PROTECTED + "/search",
  EDIT_PROFILE: PROTECTED + "/edit-profile",
  NOTIFICATIONS: PROTECTED + "/notifications",
};

export const router = createBrowserRouter([
  { path: ROUTES.ROOT, element: <PhoneAuth /> },
  {
    path: ROUTES.ROOT,
    element: <Layout />,
    children: [
      {
        path: ROUTES.PROFILE + "/:id",
        element: <Profile />,
      },
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.ADD_REVIEW,
        element: <NewReviewForm />,
      },
      {
        path: ROUTES.SEARCH,
        element: <SearchPage />,
      },
      {
        path: ROUTES.POST + "/:id",
        element: <Comments />,
      },
      {
        path: ROUTES.HIGHEST_RATED,
        element: <HighestRated />,
      },
      {
        path: ROUTES.NOTIFICATIONS,
        element: <Notifications />,
      },
      {
        path: ROUTES.EDIT_PROFILE + "/:id",
        element: <EditProfile />,
      },
    ],
  },
]);
