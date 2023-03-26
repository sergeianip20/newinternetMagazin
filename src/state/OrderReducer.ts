import { createSlice } from "@reduxjs/toolkit";

export type OrderTypeInit = {
  order: Array<OrderType>;
};

type OrderType = {
  id: string;
  userId: string;
  NumberOrder: string;
  priceOrder: string;
  orderUser: Array<OrderUserType>;
  status: "activate" | "done";
};
type OrderUserType = {
  id: string;
  name: string;
  filter: string;
  price: string;
  descrition: string;
  quantity: number;
};

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

const OrderReducer = createSlice({
  name: "order",
  initialState,
  reducers: {
    createOrder(state, action) {
      state.order = [...state.order, action.payload];
    },
    deleteOrder(state, action) {
      state.order = state.order.filter((e: any) => e.id !== action.payload);
    },
    updateStatus(state, action) {
      state.order = state.order.map((e: any) =>
        e.id === action.payload.id ? { ...e, status: action.payload.status } : e
      );
    },
    updateIncrementQuantity(state, action) {
      state.order = state.order.map((e: any) =>
        e.id === action.payload.id
          ? {
              ...e,
              orderUser: e.orderUser.map((t: any) =>
                t.id === action.payload.orderId
                  ? { ...t, quantity: action.payload.quantity }
                  : t
              )
            }
          : e
      );
    },
    updateIncrementPrice(state, action) {
      state.order = state.order.map((e: any) =>
        e.id === action.payload.id
          ? {
              ...e,
              orderUser: e.orderUser.map((t: any) =>
                t.id === action.payload.orderId
                  ? {
                      ...t,
                      price: (+t.price / t.quantity) * action.payload.quantity,
                      quantity: action.payload.quantity
                    }
                  : t
              )
            }
          : e
      );
    },
    updateOrderPrice(state, action) {
      state.order = state.order.map((e) =>
        e.id === action.payload
          ? {
              ...e,
              priceOrder: e.orderUser.reduce((a, b) => {
                return a + +b.price;
              }, 0)
            }
          : e
      );
    }
  }
});
export default OrderReducer.reducer;
export const {
  createOrder,
  deleteOrder,
  updateStatus,
  updateIncrementQuantity,
  updateIncrementPrice,
  updateOrderPrice
} = OrderReducer.actions;
