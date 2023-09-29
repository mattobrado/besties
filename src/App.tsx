import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import ErrorPage from "./components/ErrorPage";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import ProfilePage from "./components/ProfilePage";
import Home from "./components/home/Home";
import Layout from "./components/layout/Layout";
import ROUTES from "./constants/routes";

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTES.LOGIN,
        element: <Login />,
      },
      {
        path: ROUTES.SIGN_UP,
        element: <SignUp />,
      },
      {
        path: ROUTES.PROTECTED,
        element: <Layout />,
        children: [
          {
            path: "home",
            element: <Home />,
          },
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
