import { createBrowserRouter } from "react-router-dom";
import Login from "../components/auth/Login";
import Layout from "../components/layout/Layout";
import Home from "../components/home/Home";
import NewReviewForm from "../components/newReviewForm/NewReviewForm";
import Comments from "../components/comments/Comments";
import Profile from "../components/profile/Profile";
import HighestRated from "../components/lists/HighestRated";
import SearchPage from "../components/search/SearchPage";
import PhoneAuth from "../components/auth/PhoneAuth";

const PROTECTED = "/b";

export const ROUTES = {
  COMMENTS: PROTECTED + "/comments",
  HOME: PROTECTED + "/home",
  LOGIN: "/login",
  PROFILE: "/u",
  PROTECTED,
  ROOT: "/",
  SIGNUP: "/signup",
  ADD_REVIEW: PROTECTED + "/review",
  SEARCH: PROTECTED + "/search",
  HIGHEST_RATED: "/top-users",
};

export const router = createBrowserRouter([
  { path: ROUTES.ROOT, element: <Login /> },
  { path: ROUTES.LOGIN, element: <Login /> },
  { path: ROUTES.SIGNUP, element: <PhoneAuth /> },
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
        path: ROUTES.COMMENTS + "/:id",
        element: <Comments />,
      },
      {
        path: ROUTES.HIGHEST_RATED,
        element: <HighestRated />,
      },
    ],
  },
]);
