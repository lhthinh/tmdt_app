import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allproduct: [],
};

const listProductSlice = createSlice({
  name: "listProduct",
  initialState,
  reducers: {
    getAllproduct: (state, action) => {
      console.log(action);
      state.allproduct = action.payload;
    },
  },
});
export const { getAllproduct } = listProductSlice.actions;
export default listProductSlice.reducer;
