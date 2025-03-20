import React from "react";

export interface componentType {
  children: React.ReactNode;
}
export type FieldType = {
  email?: string;
  password?: string;
  name?: string;
  surname?: string;
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
  discount?: false;
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
  category?:string
}
export interface TitleCategoryType {
  id: number;
  title: string;
  label: string;
}
