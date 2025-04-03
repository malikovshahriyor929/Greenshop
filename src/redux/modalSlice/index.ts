import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  ModalVisibilty: boolean;
  ModalVisibiltyForOrder: boolean;
}
let initialState: InitialStateType = {
  ModalVisibilty: false,
  ModalVisibiltyForOrder: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalVisibilty(state) {
      state.ModalVisibilty = !state.ModalVisibilty;
    },
    setModalVisibiltyForOrder(state) {
      state.ModalVisibiltyForOrder = !state.ModalVisibiltyForOrder;
    },
  },
});

export const { setModalVisibilty,setModalVisibiltyForOrder } = modalSlice.actions;
export default modalSlice.reducer;
