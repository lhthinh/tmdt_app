import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
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

    sortFromBotToTop: (state, action) => {
      state.allhomecontent = _.sortBy(action.payload, [
        function (o) {
          return o.price;
        },
      ]);
    },
  },
});
export const { getAllhomecontent, sortFromBotToTop } =
  listHomeContentSlice.actions;
export default listHomeContentSlice.reducer;
