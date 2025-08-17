import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./reducer/basketSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
