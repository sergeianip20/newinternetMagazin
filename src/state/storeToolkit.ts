import { combineReducers, configureStore } from "@reduxjs/toolkit";
import navSlice from "./NarReducerToolkit";
import { ProdReducer } from "./Prod-reducer.ts";
import ProdSlice from "./Prodreducer";
import { FarvoritesReducer } from "./Favorites-redures";
import FavoritesToolkit from "./FavoritesToolkit";
import BasketReducer from "./BasketToolkit";
const rootReducer = combineReducers({
  navSlice,
  ProdSlice,
  FavoritesToolkit,
  BasketReducer
});
export const setupStore = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
