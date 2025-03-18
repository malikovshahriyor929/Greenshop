import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Blogs from "../pages/blog";
import MainLayout from "../shared/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);
