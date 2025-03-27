import { ProfleTabType, TitleCategoryType } from "../@types";
import AboutProfile from "../components/blog/posts/aboutPosts/user/AboutProfile";
import Follow from "../components/blog/posts/aboutPosts/user/AboutProfile/aboutPages/followers";
import Liked from "../components/blog/posts/aboutPosts/user/AboutProfile/aboutPages/like";
import PostsForAbout from "../components/blog/posts/aboutPosts/user/AboutProfile/aboutPages/posts";
import ProductForAbout from "../components/blog/posts/aboutPosts/user/AboutProfile/aboutPages/product";

export const title_category: TitleCategoryType[] = [
  {
    id: 1,
    title: "All Plants",
    label: "all-plants",
  },
  {
    id: 2,
    title: "New Arriwals",
    label: "new-arrivals",
  },
  {
    id: 3,
    title: "Sale",
    label: "sale",
  },
];
export const profile_tab_items: ProfleTabType[] = [
  {
    key: "1",
    label: "About",
    Children: AboutProfile,
  },
  {
    key: "2",
    label: "Products",
    Children: ProductForAbout ,
  },
  {
    key: "3",
    label: "Posts",
    Children: PostsForAbout ,
  },
  {
    key: "4",
    label: "Likees",
    Children: Liked ,
  },
  {
    key: "5",
    label: "Followers",
    Children: Follow ,
  },
];
