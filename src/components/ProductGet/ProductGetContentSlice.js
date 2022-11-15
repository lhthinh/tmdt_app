import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allProductGet: false,
};

const productGetSlice = createSlice({
  name: "ProductGetContent",
  initialState,
  reducers: {
    getAllProductGet: (state, action) => {
      state.allProductGet = action.payload;
    },
  },
});
export const { getAllProductGet } = productGetSlice.actions;
export default productGetSlice.reducer;
