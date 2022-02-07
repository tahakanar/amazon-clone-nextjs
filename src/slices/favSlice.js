import { createSlice } from "@reduxjs/toolkit";

export const favSlice = createSlice({
  name: "fav",
  initialState: {
    datas: [],
  },
  reducers: {
    addToFav: (state, action) => {
      state.datas = [...state.datas, action.payload];
    },
    removeFromFav: (state, action) => {
      const index = state.datas.findIndex(
        (favItem) => favItem.id === action.payload.id
      );

      let newFavorite = [...state.datas];
      if (index >= 0) {
        newFavorite.splice(index, 1);
      }
      state.datas = newFavorite;
    },
  },
});

export const { addToFav, removeFromFav } = favSlice.actions;

export const selectFavs = (state) => state.fav.datas;

export default favSlice.reducer;
