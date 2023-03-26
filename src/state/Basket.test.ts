export { BasketType } from "../type/BasketType";
import { v1 } from "uuid";
import {
  createBasket,
  priceInCrement,
  priceDecrement,
  Incrementquantity,
  DecrementIncrementquantity,
  priceDecrementBasket,
  priceIncrementBasket
} from "./BasketToolkit";
import BasketReducer from "./BasketToolkit";
test("create correct createBasket basket", () => {
  const initialState: BasketType = {
    price: 0,
    basket: []
  };
  let action = createBasket({
    name: "basket",
    descrition: "hello",
    price: "500"
  });
  let endState = BasketReducer(initialState, action);
  expect(endState.basket.length).toBe(1);
});
test("create correct priceInCrement basket", () => {
  const initialState: BasketType = {
    price: 0,
    basket: []
  };
  let action = priceInCrement("500");
  let endState = BasketReducer(initialState, action);
  expect(endState.price).toBe(500);
});
test("create correct priceDecrement basket", () => {
  const initialState: BasketType = {
    price: 0,
    basket: []
  };
  let action = priceDecrement("500");
  let endState = BasketReducer(initialState, action);
  expect(endState.price).toBe(-500);
});
test("create correct Incrementquantity Basket", () => {
  const initialState: BasketType = {
    price: 0,
    basket: [
      {
        id: "1",
        price: "600",
        name: "basket",
        descrition: "hello",
        quantity: 1
      }
    ]
  };

  let action = Incrementquantity({ price: "1800", quantity: 3, id: "1" });
  let endState = BasketReducer(initialState, action);

  expect(endState.basket[0].price).toBe(1200);
});

test("create correct  DecrementIncrementquantity basket", () => {
  const initialState: BasketType = {
    price: 0,
    basket: [
      {
        id: "1",
        price: "600",
        name: "basket",
        descrition: "hello",
        quantity: 1
      }
    ]
  };

  let action = DecrementIncrementquantity({
    price: "1800",
    quantity: 3,
    id: "1"
  });
  let endState = BasketReducer(initialState, action);

  expect(endState.basket[0].price).toBe(1200);
});
test("create correct priceIncrementBasket basket", () => {
  const initialState: BasketType = {
    price: 0,
    basket: [
      {
        id: "1",
        price: "600",
        name: "basket",
        descrition: "hello",
        quantity: 1
      }
    ]
  };

  let action = priceIncrementBasket({
    price: "600",
    quantity: 1
  });
  let endState = BasketReducer(initialState, action);

  expect(endState.price).toBe(600);
});
test("create correct priceDecrementBasket basket", () => {
  const initialState: BasketType = {
    price: 0,
    basket: [
      {
        id: "1",
        price: "600",
        name: "basket",
        descrition: "hello",
        quantity: 1
      }
    ]
  };

  let action = priceDecrementBasket({
    price: "600",
    quantity: 1
  });
  let endState = BasketReducer(initialState, action);

  expect(endState.price).toBe(-600);
});
