import {
  createOrder,
  OrderTypeInit,
  deleteOrder,
  updateStatus,
  updateIncrementQuantity,
  updateIncrementPrice,
  updateOrderPrice
} from "./OrderReducer";
import OrderReducer from "./OrderReducer";

test("correct create Order", () => {
  const initialState: OrderTypeInit = {
    order: []
  };
  let newOrder = {
    id: "1",
    userId: "2",
    NumberOrder: "номер заказа 1 ",
    priceOrder: "покупка наволочек",
    orderUser: [
      {
        id: "1",
        name: "hello",
        filter: "string",
        price: "string",
        descrition: "string",
        quantity: 1
      }
    ],
    status: "activate"
  };
  let action = createOrder(newOrder);
  let endState = OrderReducer(initialState, action);
  expect(endState.order.length).toBe(1);
});
test("correct create deleteOrder", () => {
  const initialState: OrderTypeInit = {
    order: [
      {
        id: "1",
        userId: "2",
        NumberOrder: "номер заказа 1 ",
        priceOrder: "покупка наволочек",
        orderUser: [
          {
            id: "1",
            name: "hello",
            filter: "string",
            price: "string",
            descrition: "string",
            quantity: 1
          }
        ],
        status: "activate"
      }
    ]
  };

  let action = deleteOrder("1");
  let endState = OrderReducer(initialState, action);
  expect(endState.order.length).toBe(0);
});
test("correct updateStatus Order", () => {
  const initialState: OrderTypeInit = {
    order: [
      {
        id: "1",
        userId: "2",
        NumberOrder: "номер заказа 1 ",
        priceOrder: "500",
        orderUser: [
          {
            id: "1",
            name: "hello",
            filter: "string",
            price: "string",
            descrition: "string",
            quantity: 1
          }
        ],
        status: "activate"
      }
    ]
  };

  let action = updateStatus({ id: "1", status: "done", orderId: "1" });
  let endState = OrderReducer(initialState, action);
  expect(endState.order[0].status).toBe("done");
});
test("correct updateQuantity Order", () => {
  const initialState: OrderTypeInit = {
    order: [
      {
        id: "1",
        userId: "2",
        NumberOrder: "номер заказа 1 ",
        priceOrder: "500",
        orderUser: [
          {
            id: "1",
            name: "hello",
            filter: "string",
            price: "string",
            descrition: "string",
            quantity: 1
          }
        ],
        status: "activate"
      }
    ]
  };

  let action = updateIncrementQuantity({ id: "1", quantity: 3, orderId: "1" });
  let endState = OrderReducer(initialState, action);
  console.log(endState);
  expect(endState.order[0].orderUser[0].quantity).toBe(3);
});
test("correct updateIncrementPrice Order", () => {
  const initialState: OrderTypeInit = {
    order: [
      {
        id: "1",
        userId: "2",
        NumberOrder: "номер заказа 1 ",
        priceOrder: "500",
        orderUser: [
          {
            id: "1",
            name: "hello",
            filter: "string",
            price: "1200",
            descrition: "string",
            quantity: 2
          },
          {
            id: "2",
            name: "hello",
            filter: "string",
            price: "1200",
            descrition: "string",
            quantity: 2
          }
        ],
        status: "activate"
      }
    ]
  };

  let action = updateIncrementPrice({ id: "1", quantity: 3, orderId: "1" });
  let endState = OrderReducer(initialState, action);
  console.log(endState);
  expect(endState.order[0].orderUser[0].quantity).toBe(3);
  expect(endState.order[0].orderUser[0].price).toBe(1800);
});
test("correct updateIncrementPrice Order", () => {
  const initialState: OrderTypeInit = {
    order: [
      {
        id: "1",
        userId: "2",
        NumberOrder: "номер заказа 1 ",
        priceOrder: "500",
        orderUser: [
          {
            id: "1",
            name: "hello",
            filter: "string",
            price: "1200",
            descrition: "string",
            quantity: 2
          },
          {
            id: "2",
            name: "hello",
            filter: "string",
            price: "1200",
            descrition: "string",
            quantity: 2
          }
        ],
        status: "activate"
      }
    ]
  };

  let action = updateIncrementPrice({ id: "1", quantity: 3, orderId: "1" });
  let endState = OrderReducer(initialState, action);
  console.log(endState);
  expect(endState.order[0].orderUser[0].quantity).toBe(3);
  expect(endState.order[0].orderUser[0].price).toBe(1800);
});
test("correct updateOrderPrice Order", () => {
  const initialState: OrderTypeInit = {
    order: [
      {
        id: "1",
        userId: "2",
        NumberOrder: "номер заказа 1 ",
        priceOrder: "500",
        orderUser: [
          {
            id: "1",
            name: "hello",
            filter: "string",
            price: "1200",
            descrition: "string",
            quantity: 2
          },
          {
            id: "2",
            name: "hello",
            filter: "string",
            price: "1200",
            descrition: "string",
            quantity: 2
          }
        ],
        status: "activate"
      }
    ]
  };

  let action = updateOrderPrice("1");
  let endState = OrderReducer(initialState, action);

  expect(endState.order[0].priceOrder).toBe(2400);
});
