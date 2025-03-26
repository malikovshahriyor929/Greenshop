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
import MyDeaitls from "../components/profile/myDetails";
import MyProduct from "../components/profile/myProduct";
import Address from "../components/profile/address";
import Wishlist from "../components/profile/wishList";
import Tracking from "../components/profile/tracking";
import Liked from "../components/blog/posts/aboutPosts/user/AboutProfile/aboutPages/like";
import Follow from "../components/blog/posts/aboutPosts/user/AboutProfile/aboutPages/followers";
import PostsForAbout from "../components/blog/posts/aboutPosts/user/AboutProfile/aboutPages/posts";
import ProductForAbout from "../components/blog/posts/aboutPosts/user/AboutProfile/aboutPages/product";

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
        path: "/blogs/profile/:user",
        element: <AboutProfile />,
        children: [
          {
            path: "/blogs/profile/:user",
            element: <Liked />,
          },
          {
            path: "/blogs/profile/:user/followers",
            element: <Follow />,
          },
          {
            path: "/blogs/profile/:user/posts",
            element: <PostsForAbout />,
          },
          {
            path: "/blogs/profile/:user/products",
            element: <ProductForAbout />,
          },
        ],
      },
      {
        path: "/profile",
        element: <Profile />,
        children: [
          {
            path: "/profile",
            element: <MyDeaitls />,
          },
          {
            path: "/profile/myProducts",
            element: <MyProduct />,
          },
          {
            path: "/profile/address",
            element: <Address />,
          },
          {
            path: "/profile/wishList",
            element: <Wishlist />,
          },
          {
            path: "/profile/tracking",
            element: <Tracking />,
          },
        ],
      },
    ],
  },
]);
// https://roadmap.sh/frontend
