import { createBrowserRouter } from "react-router-dom";
import Login from "../components/auth/Login";
import Layout from "../components/layout/Layout";
import { ROUTES } from "../constants/constants";
import Signup from "../components/auth/SignUp";
import Home from "../components/home/Home";

export const router = createBrowserRouter([
  { path: ROUTES.ROOT, element: "Public Root" },
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
      // {
      //   path: USERS,
      //   element: <Users />,
      // },
      // {
      //   path: PROFILE,
      //   element: <Profile />,
      // },
      // {
      //   path: COMMENTS,
      //   element: <Comments />,
      // },
    ],
  },
]);
