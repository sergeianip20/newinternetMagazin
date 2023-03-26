export { BasketType } from "../type/BasketType";
import { createSlice } from "@reduxjs/toolkit";
import { v1 } from "uuid";
const initialState: BasketType = {
  price: 0,
  basket: []
};

const BasketReducer = createSlice({
  name: "basket",
  initialState,
  reducers: {
    createBasket(state, action) {
      let item = {
        id: v1(),
        name: action.payload.name,
        descrition: action.payload.descrition,
        price: action.payload.price,
        quantity: 1
      };
      state.basket = [...state.basket, item];
    },
    priceInCrement(state, action) {
      state.price = state.price + +action.payload;
    },
    priceDecrement(state, action) {
      state.price = state.price - +action.payload;
    },
    priceDecrementBasket(state, action) {
      let prices = action.payload.price / action.payload.quantity;
      state.price = state.price - +prices;
    },
    priceIncrementBasket(state, action) {
      let prices = action.payload.price / action.payload.quantity;
      state.price = state.price + +prices;
    },
    Incrementquantity(state, action) {
      let prices = +action.payload.price / +action.payload.quantity;
      state.basket = state.basket.map((e: any) =>
        e.id == action.payload.id
          ? {
              ...e,
              quantity: e.quantity + 1,
              price: +e.price + +prices
            }
          : e
      );
    },
    DecrementIncrementquantity(state, action) {
      let prices =
        (action.payload.price / action.payload.quantity) *
        (action.payload.quantity - 1);
      console.log(prices);
      state.basket = state.basket.map((e: any) =>
        e.id === action.payload.id
          ? {
              ...e,
              quantity: e.quantity - 1,
              price: prices
            }
          : e
      );
    }
  }
});
export default BasketReducer.reducer;
export const {
  createBasket,
  priceInCrement,
  priceDecrement,
  Incrementquantity,
  DecrementIncrementquantity,
  priceDecrementBasket,
  priceIncrementBasket
} = BasketReducer.actions;
