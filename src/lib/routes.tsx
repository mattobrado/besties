import { createBrowserRouter } from "react-router-dom";
import Login from "../components/auth/Login";
import Layout from "../components/layout/Layout";
import Signup from "../components/auth/Signup";
import Home from "../components/home/Home";
import LoadingScreen from "../components/LoadingScreen";
import NewReview from "../components/newReviewForm/NewReview";

const PROTECTED = "/protected";

export const ROUTES = {
  COMMENTS: PROTECTED + "/comments/:id",
  HOME: PROTECTED + "/home",
  LOGIN: "/login",
  PROFILE: PROTECTED + "/profile",
  PROTECTED,
  ROOT: "/",
  SIGNUP: "/signup",
  USERS: PROTECTED + "/users",
  NEW_REVIEW: PROTECTED + "/review",
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
        path: ROUTES.NEW_REVIEW,
        element: <NewReview />,
      },
      {
        path: ROUTES.USERS,
        element: <LoadingScreen />, // <Users />,
      },
      {
        path: ROUTES.PROFILE + "/:id",
        element: <LoadingScreen />,
      },
    ],
  },
]);
