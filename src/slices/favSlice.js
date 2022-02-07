import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  datas: [],
};

export const favSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    addToFav: (state, action) => {
      state.datas = [...state.datas, action.payload];
    },
  },
});

export const { addToFav } = favSlice.actions;

export const selectFavs = (state) => state.fav.datas;

export default favSlice.reducer;
