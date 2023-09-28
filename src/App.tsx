import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./modules/Root";
import ErrorPage from "./modules/ErrorPage";
import Login from "./modules/auth/Login";
import SignUp from "./modules/auth/SignUp";
import ProfilePage from "./modules/ProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
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
