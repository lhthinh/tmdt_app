import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter-slice";
import loginReducer from "../components/Login/LoginSlice";
import registerReducer from "../components/Register/RegisterSlice";
import listProductReducer from "../components/ListProduct/ListProductSlice";
import productGetReducer from "../components/ProductGet/ProductGetContentSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
    register: registerReducer,
    listProduct: listProductReducer,
    productGet: productGetReducer,
  },
});
