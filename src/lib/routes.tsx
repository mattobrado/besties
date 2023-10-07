import { createBrowserRouter } from "react-router-dom";
import Login from "../components/auth/Login";
import Layout from "../components/layout/Layout";
import Home from "../components/home/Home";
import LoadingScreen from "../components/LoadingScreen";
import NewReviewForm from "../components/newReviewForm/NewReviewForm";
import Signup from "../components/auth/SignUp";

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
  ADD_REVIEW: PROTECTED + "/review",
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
        path: ROUTES.USERS,
        element: <LoadingScreen />,
      },
      {
        path: ROUTES.PROFILE + "/:id",
        element: <LoadingScreen />,
      },
    ],
  },
]);
