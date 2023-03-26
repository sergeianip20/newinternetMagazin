import { DeleteSweepRounded } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";
import { v1 } from "uuid";

export type Intype = {
  prod: Array<prodType>;
};
type prodType = {
  id: string;
  name: string;
  filter: string;
  price: string;
  descrition: string;
  live: boolean;
};

const initialState: Intype = {
  prod: [
    {
      id: v1(),
      name: "постельное",
      filter: "all",
      price: "600",
      descrition: "супер белье",
      live: false
    },
    {
      id: v1(),
      name: "топовое",
      filter: "old",
      price: "300",
      descrition: "супер  пупер белье",
      live: false
    },
    {
      id: v1(),
      name: "нетоповое",
      filter: "old",
      price: "500",
      descrition: "супер не пупер белье",
      live: false
    }
  ]
};
const ProdSlice = createSlice({
  name: "nav",
  initialState,

  reducers: {
    filterName(state, action) {
      state.prod = state.prod.filter((e) => e.name === action.payload);
    },
    liveGet(state, action) {
      state.prod = state.prod.map((e: any) =>
        e.id == action.payload.id ? { ...e, live: action.payload.live } : e
      );
    },
    localStorage(state, action) {
      state.prod = [...state.prod, action.payload];
    },
    deleteProd(state, action) {
      state.prod = state.prod.filter((e: any) => e.id !== action.payload);
    },
    updateName(state, action) {
      state.prod = state.prod.map((e: any) =>
        e.id === action.payload.id ? { ...e, name: action.payload.name } : e
      );
    },
    updatePrice(state, action) {
      state.prod = state.prod.map((e: any) =>
        e.id === action.payload.id ? { ...e, price: action.payload.price } : e
      );
    },
    updateFilter(state, action) {
      state.prod = state.prod.map((e: any) =>
        e.id === action.payload.id ? { ...e, filter: action.payload.filter } : e
      );
    }
  }
});
export default ProdSlice.reducer;
export const {
  filterName,
  liveGet,
  localStorage,
  deleteProd,
  updateName,
  updatePrice,
  updateFilter
} = ProdSlice.actions;
