import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter-slice";
import loginReducer from "../components/Login/LoginSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
  },
});
