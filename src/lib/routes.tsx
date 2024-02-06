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
import { ROUTES } from "./constants";

const idString = "/:id";

export const router = createBrowserRouter([
  { path: ROUTES.LOGIN, element: <PhoneAuth /> },
  {
    path: ROUTES.ROOT,
    element: <Layout />,
    children: [
      { path: ROUTES.ROOT, element: <Home /> },
      {
        path: ROUTES.PROFILE + idString,
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
        path: ROUTES.POST + idString,
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
        path: ROUTES.EDIT_PROFILE + idString,
        element: <EditProfile />,
      },
    ],
  },
]);
