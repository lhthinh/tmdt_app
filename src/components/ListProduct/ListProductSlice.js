import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allProduct: false,
};

const listProductSlice = createSlice({
  name: "ListProduct",
  initialState,
  reducers: {
    getAllProduct: (state, action) => {
      state.allProduct = action.payload;
    },
  },
});
export const { getAllProduct } = listProductSlice.actions;
export default listProductSlice.reducer;
