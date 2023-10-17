import { createBrowserRouter } from "react-router-dom";
import Login from "../components/auth/Login";
import Layout from "../components/layout/Layout";
import Home from "../components/home/Home";
import NewReviewForm from "../components/newReviewForm/NewReviewForm";
import Signup from "../components/auth/SignUp";
import Comments from "../components/comments/Comments";
import Profile from "../components/profile/Profile";
import Search from "../search/search";

const PROTECTED = "/b";

export const ROUTES = {
  COMMENTS: PROTECTED + "/comments",
  HOME: PROTECTED + "/home",
  LOGIN: "/login",
  PROFILE: PROTECTED + "/profile",
  PROTECTED,
  ROOT: "/",
  SIGNUP: "/signup",
  USERS: PROTECTED + "/users",
  ADD_REVIEW: PROTECTED + "/review",
  SEARCH: PROTECTED + "/search",
};

export const router = createBrowserRouter([
  { path: ROUTES.ROOT, element: <Login /> },
  { path: ROUTES.LOGIN, element: <Login /> },
  { path: ROUTES.SIGNUP, element: <Signup /> },
  {
    path: ROUTES.PROTECTED,
    element: <Layout />,
    children: [
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
        element: <Search />,
      },
      {
        path: ROUTES.PROFILE + "/:id",
        element: <Profile />,
      },
      {
        path: ROUTES.COMMENTS + "/:id",
        element: <Comments />,
      },
    ],
  },
]);
