import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visible: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    show: (state) => {
      console.log(state);
      state.visible = true;
    },
    unshow: (state) => {
      state.visible = false;
    },
  },
});

export const { show, unshow } = loginSlice.actions;
export default loginSlice.reducer;
