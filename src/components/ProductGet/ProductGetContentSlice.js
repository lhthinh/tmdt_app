import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allProduct: false,
};

const productGetSlice = createSlice({
  name: "ProductGetContent",
  initialState,
  reducers: {
    getAllProduct: (state, action) => {
      state.allProduct = action.payload;
    },
  },
});
export const { getAllProduct } = productGetSlice.actions;
export default productGetSlice.reducer;
