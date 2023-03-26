import { v1 } from "uuid";
const FILTER_NAME = "FILTER_NAME ";
const SET_PROD = "SET_PROD";
const LIVE_GET = "LIVE_GET";
const LOCAL_STORAGE = "LOCAL_STORAGE";
const DELETE_PROD = "DELETE_PROD";
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
type filterTypeAction = ReturnType<typeof FilterNameAction>;
type liveGet = ReturnType<typeof LiveUpdateAc>;
type CreateTyAction = ReturnType<typeof CreateProd>;
type deleteAction = ReturnType<typeof Deleteprod>;
type ActionType = filterTypeAction | liveGet | CreateTyAction | deleteAction;
const initialstate = {
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

export const ProdReducer = (state = initialstate, action: ActionType) => {
  switch (action.type) {
    case FILTER_NAME: {
      return {
        ...state,
        prod: state.prod.filter((e) => e.name === action.name)
      };
    }
    case LIVE_GET: {
      return {
        ...state,
        prod: state.prod.map((e) =>
          e.id == action.id ? { ...e, live: action.live } : e
        )
      };
    }
    case LOCAL_STORAGE: {
      //localStorage.setItem("item", JSON.stringify(action.item));
      //let pro = JSON.parse(localStorage.getItem("item"));
      let statecopy = { ...state, prod: [action.item, ...state.prod] };
      return statecopy;
    }
    case DELETE_PROD: {
      return {
        ...state,
        prod: state.prod.filter((e: any) => e.id !== action.id)
      };
    }
    default:
      return state;
  }
};
export const FilterNameAction = (name: string) => {
  return { type: FILTER_NAME, name } as const;
};
export const UpdateCA = () => {
  return { type: SET_PROD } as const;
};
export const LiveUpdateAc = (id: string, live: boolean) => {
  return { type: LIVE_GET, id, live } as const;
};
export const CreateProd = (item: any) => {
  return { type: LOCAL_STORAGE, item } as const;
};
export const Deleteprod = (id: string) => {
  return { type: DELETE_PROD, id } as const;
};
