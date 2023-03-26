import { createStore } from "redux";
import { combineReducers } from "redux";
import { ProdReducer } from "./Prod-reducer.ts";
import { NavReducer } from "./NavReducer.ts";
import { FarvoritesReducer } from "./Favorites-redures";
import { navSlice } from "./NarReducerToolkit";
let reducer = combineReducers({
  ProdReducer: ProdReducer,
  NavReducer: NavReducer,
  FarvoritesReducer: FarvoritesReducer
});
export const store = createStore(reducer);
