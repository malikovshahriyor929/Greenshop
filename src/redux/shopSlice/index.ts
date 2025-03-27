import { createSlice } from "@reduxjs/toolkit";
import type { CardType } from "../../@types";

interface InitialStateType {
  product: CardType[];
  coupon: number;
}

let initialState: InitialStateType = {
  product: JSON.parse(localStorage.getItem("product") as string) || [],
  coupon: JSON.parse(localStorage.getItem("coupon") as string) || 0,
};

let ShopSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addToCart: (state, { payload }: { payload: CardType }) => {
      let existing = state.product.find((value) => value?._id === payload._id);
      if (!existing) {
        state.product = [...state.product, { ...payload, count: 1 }];
      } else {
        state.product = state.product.map((value) =>
          value?._id === payload._id
            ? { ...value, count: (value.count || 0) + 1 }
            : value
        );
      }
      localStorage.setItem("product", JSON.stringify(state.product));
    },
    removeToCart: (state) => {
      state.product = [];
    },
    deleteCart: (state, { payload }) => {
      state.product = state.product.filter((value) => value._id !== payload.id);
      localStorage.setItem("product", JSON.stringify(state.product));
    },
    increment: (state, { payload }) => {
      state.product = state.product.map((value) =>
        value._id == payload.id
          ? { ...value, count: (value.count || 1) + 1 }
          : value
      );
      localStorage.setItem("product", JSON.stringify(state.product));
    },
    decrement: (state, { payload }) => {
      state.product = state.product.map((value) =>
        value._id == payload.id
          ? {
              ...value,
              count: (value.count || 1) > 1 ? (value.count || 1) - 1 : 1,
            }
          : value
      );
      localStorage.setItem("product", JSON.stringify(state.product));
    },
    Coupon: (state, { payload }: { payload: string | number }) => {
      state.coupon = +payload;
    },
  },
});

export const {
  addToCart,
  increment,
  decrement,
  deleteCart,
  removeToCart,
  Coupon,
} = ShopSlice.actions;
export default ShopSlice.reducer;
