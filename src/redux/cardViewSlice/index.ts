import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  category: string;
}

let initialState: InitialStateType = {
  category: "",
};

let CardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    getdata: (state, { payload }) => {
      console.log(state, payload);
    },
  },
});

export const { getdata } = CardSlice.actions;
export default CardSlice.reducer;
