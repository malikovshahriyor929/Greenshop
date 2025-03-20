import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice";
import CardSlice from "./cardViewSlice";
import ShopSlice from "./shopSlice"
export const store = configureStore({
  reducer: {
    modalSlice,
    CardSlice,
    ShopSlice
  },
});
export type DispatchType = typeof store.dispatch;
export type RootStore = ReturnType<typeof store.getState>;
