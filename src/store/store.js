import { configureStore } from "@reduxjs/toolkit";
import redirectReducer from "./redirectSlice";

export const store = configureStore({
  reducer: {
    // reducerName: reducerName
    redirect: redirectReducer,
  },
});
