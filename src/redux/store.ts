import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice";
import CardSlice from "./cardViewSlice";
export const store = configureStore({
  reducer: {
    modalSlice,
    CardSlice,
  },
});
export type DispatchType = typeof store.dispatch;
export type RootStore = ReturnType<typeof store.getState>;
