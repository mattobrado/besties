import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import ErrorPage from "./components/ErrorPage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ProfilePage from "./components/ProfilePage";

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
