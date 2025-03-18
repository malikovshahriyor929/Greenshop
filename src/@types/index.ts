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
