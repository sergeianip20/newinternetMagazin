import { createSlice } from "@reduxjs/toolkit";
import { v1 } from "uuid";

type initistateType = {
  name: Array<NameTYpe>;
};
type NameTYpe = {
  id: string;
  name: string;
};

let initialState: initistateType = {
  name: [
    { id: v1(), name: "наволочки" },
    { id: v1(), name: "пододеяльники" },
    { id: v1(), name: "наволочки" }
  ]
};
const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    deleteMenu(state, action) {
      state.name = state.name.filter((e: any) => e.id !== action.payload);
    },
    createMenu(state, action) {
      let menu = { id: v1(), name: action.payload };
      state.name = [...state.name, menu];
    }
  }
});
export default navSlice.reducer;
export const { createMenu, deleteMenu } = navSlice.actions;
