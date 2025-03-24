import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  category: number;
}

let initialState: InitialStateType = {
  category: JSON.parse(localStorage.getItem("view")!) || 0,
};

let CardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    renderView: (state, { payload }) => {
      state.category = payload;
      localStorage.setItem("view", JSON.stringify(state.category));
    },
  },
});

export const { renderView } = CardSlice.actions;
export default CardSlice.reducer;
