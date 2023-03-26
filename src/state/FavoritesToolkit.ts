import { initialTypeFavorites, favoritesType } from "../type/Favotites";
import { createSlice } from "@reduxjs/toolkit";
const initialState: initialTypeFavorites = {
  favorites: []
};
const FavoritesToolkit = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    favoritesCreate(state, action) {
      let prod = {
        id: action.payload.id,
        name: action.payload.name,
        filter: action.payload.filter,
        price: action.payload.price,
        descrition: action.payload.descrition,
        live: true
      };
      state.favorites = [...state.favorites, prod];
    },
    favoritesDelete(state, action) {
      state.favorites = state.favorites.filter(
        (e: any) => e.id !== action.payload
      );
    }
  }
});

export default FavoritesToolkit.reducer;
export const { favoritesCreate, favoritesDelete } = FavoritesToolkit.actions;
