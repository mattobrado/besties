import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import ErrorPage from "./components/ErrorPage";
import Login from "./components/auth/Login";
import ProfilePage from "./components/ProfilePage";
import Home from "./components/home/Home";
import Layout from "./components/layout/Layout";
import { ROUTES } from "./constants/constants";
import Signup from "./components/auth/SignUp";

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: ROUTES.ROOT, element: "public root" },
      {
        path: ROUTES.LOGIN,
        element: <Login />,
      },
      {
        path: ROUTES.SIGNUP,
        element: <Signup />,
      },
      {
        path: ROUTES.PROTECTED,
        element: <Layout />,
        children: [
          {
            path: ROUTES.HOME,
            element: <Home />,
          },
          // {
          //   path: ROUTES.USERS,
          //   element: <Users />,
          // },
          // {
          //   path: ROUTES.PROFILE,
          //   element: <Profile />,
          // },
          // {
          //   path: ROUTES.COMMENTS,
          //   element: <Comments />,
          // },
        ],
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
