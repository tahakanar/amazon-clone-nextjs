import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";
import favReducer from "../slices/favSlice";

export const store = configureStore({
  reducer: { basket: basketReducer, fav: favReducer },
});
