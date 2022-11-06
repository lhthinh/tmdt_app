import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visible: false,
};
const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    showRegister: (state) => {
      state.visible = true;
    },
    unshowRegister: (state) => {
      state.visible = false;
    },
  },
});
export const { showRegister, unshowRegister } = registerSlice.actions;
export default registerSlice.reducer;
