import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./error-page";
import Login from "./Login";
import SignUp from "./SignUp";

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
        path: "signUp",
        element: <SignUp />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
