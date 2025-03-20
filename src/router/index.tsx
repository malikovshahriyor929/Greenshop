import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Blogs from "../pages/blog";
import MainLayout from "../shared/layout";
import CardView from "../pages/cardView";
import Shop from "../pages/shop";
import Proccess from "../pages/proccess";

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
        path: "/shop/:category/:id",
        element: <CardView />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/shopping_cart",
        element: <Shop />,
      },
      {
        path: "/shop/checkout",
        element: <Proccess />,
      },
    ],
  },
]);
// https://roadmap.sh/frontend
