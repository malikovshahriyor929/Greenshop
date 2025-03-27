import React, { ReactNode } from "react";

export interface componentType {
  children: React.ReactNode;
}
export type FieldType = {
  email?: string;
  password?: string;
  name?: string;
  surname?: string;
  phone_number?: number;
};

export interface CategorySideType {
  _id?: string;
  title?: string;
  count?: number;
  route_path?: string;
  created_by?: string;
  created_at?: string;
  __v?: number;
  param?: string;
}
export interface CardType {
  _id?: string;
  title?: string;
  price?: number;
  discount?: any;
  discount_price?: string;
  short_description?: string;
  description?: string;
  main_image?: string;
  detailed_images?: [string, string, string, string];
  rate?: number;
  views?: number;
  tags?: [];
  comments?: [];
  created_by?: string;
  created_at?: string;
  __v?: number;
  category?: string;
  count?: number;
}
export interface TitleCategoryType {
  id: number;
  title: string;
  label: string;
}

export interface BlogPosts {
  content: string;
  created_at: string;
  created_by: string;
  reaction_length: number;
  short_description: string;
  title: string;
  views: number;
  __v: number;
  _id: string;
}

export interface UserInfoType {
  billing_address?: object;
  create_account_limit?: number;
  create_plant_limit?: number;
  create_post_limit?: number;
  created_at?: string;
  created_by?: string;
  email?: string;
  followers?: object[];
  hashtags?: object[];
  name?: string;
  order_list?: object[];
  password?: string;
  permission?: { create?: false; update?: false; delete?: false; read?: true };
  profile_photo?: string;
  surname?: string;
  user_type?: string;
  username?: string;
  wishlist?: object[];
  __v?: number;
  _id?: string;
}
export interface ProfleTabType {
  key: string ;
  label: string;
  Children: React.FC
}
