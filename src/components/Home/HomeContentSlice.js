import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allhomecontent: [],
};

const listHomeContentSlice = createSlice({
  name: "listHomecontent",
  initialState,
  reducers: {
    getAllhomecontent: (state, action) => {
      console.log(action);
      state.allhomecontent = action.payload;
    },
  },
});
export const { getAllhomecontent } = listHomeContentSlice.actions;
export default listHomeContentSlice.reducer;
