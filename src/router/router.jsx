import {
  createBrowserRouter
} from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import SingleUser from "../Pages/SingleUser";
import UsersPage from "../Pages/UsersPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <UsersPage />,
    },
    {
      path: "/:id",
      element: <SingleUser />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);