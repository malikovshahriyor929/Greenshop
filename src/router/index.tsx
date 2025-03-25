import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Blogs from "../pages/blog";
import MainLayout from "../shared/layout";
import CardView from "../pages/cardView";
import Shop from "../pages/shop";
import Proccess from "../pages/proccess";
import AboutPost from "../components/blog/posts/aboutPosts";
import AboutProfile from "../components/blog/posts/aboutPosts/user/AboutProfile";
import Profile from "../pages/profile";

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
        path: "/blogs/:id",
        element: <AboutPost />,
      },
      {
        path: "/shopping_cart",
        element: <Shop />,
      },
      {
        path: "/shop/checkout",
        element: <Proccess />,
      },
      {
        path: "blog/profile/:user",
        element: <AboutProfile />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);
// https://roadmap.sh/frontend
