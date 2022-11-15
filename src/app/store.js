// import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import counterReducer from "../features/counter/counter-slice";
// import loginReducer from "../components/Login/LoginSlice";

// const rootReducer = combineReducers({
//   counter: counterReducer,
//   login: loginReducer,
// });

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export let persistor = persistStore(store);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter-slice";
import loginReducer from "../components/Login/LoginSlice";
import registerReducer from "../components/Register/RegisterSlice";
import listProductReducer from "../components/ListProduct/ListProductSlice";
import productGetReducer from "../components/ProductGet/ProductGetContentSlice";
import { combineReducers } from "redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  counter: counterReducer,
  login: loginReducer,
  register: registerReducer,
  listProduct: listProductReducer,
  productGet: productGetReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
