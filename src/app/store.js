import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter-slice";
import loginReducer from "../components/Login/LoginSlice";
import listProductReducer from "../components/ListProduct/ListProductSlice";
import listHomeContentReducer from "../components/Home/HomeContentSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
    listProduct: listProductReducer,
    listHomecontent: listHomeContentReducer,
  },
});
