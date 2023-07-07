import { createBrowserRouter, Outlet } from "react-router-dom";
import { AddUser, ErrorPage, Home } from "../pages";
import Main from "~/layouts/Main";
import { Paths } from "./navbar";

const router = createBrowserRouter([
  {
    path: Paths.Home,
    element: <Main />, //Main layout
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> },
      {
        path: Paths.AddUser,
        element: <AddUser />,
      },
    ],
  },
]);

export default router;
