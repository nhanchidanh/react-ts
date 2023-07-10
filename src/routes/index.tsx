import { createBrowserRouter } from "react-router-dom";
import Main from "~/layouts/Main";
import { Paths } from "~/types";
import { ErrorPage } from "../pages";
import Loadable from "~/components/Loadable";
import { lazy } from "react";

const Home = Loadable(lazy(() => import("~/pages/Home")));
const AddUser = Loadable(lazy(() => import("~/pages/AddUser")));
const Login = Loadable(lazy(() => import("~/pages/LoginV2")));

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
  {
    path: Paths.Login,
    element: <Login />, //Login layout
    errorElement: <ErrorPage />,
  },
]);

export default router;
