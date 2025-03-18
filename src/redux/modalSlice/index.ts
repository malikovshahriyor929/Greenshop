import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  ModalVisibilty: boolean;
}
let initialState: InitialStateType = {
  ModalVisibilty: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalVisibilty(state) {
      state.ModalVisibilty = !state.ModalVisibilty;
    },
  },
});

export const { setModalVisibilty } = modalSlice.actions;
export default modalSlice.reducer;
