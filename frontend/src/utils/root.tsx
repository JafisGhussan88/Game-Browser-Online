import { RouteObject } from "react-router-dom";
import { Home } from "../pages/home/Home";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/login",
    element: <Home />,
  },

];
