import {
  filterName,
  liveGet,
  localStorage,
  deleteProd,
  updateName,
  updatePrice,
  updateFilter
} from "./Prodreducer";
import ProdSlice from "./Prodreducer";

test("test correct liveGet ", () => {
  type Intype = {
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
        id: "1",
        name: "постельное",
        filter: "all",
        price: "600",
        descrition: "супер белье",
        live: false
      },
      {
        id: "2",
        name: "топовое",
        filter: "old",
        price: "300",
        descrition: "супер  пупер белье",
        live: false
      },
      {
        id: "3",
        name: "нетоповое",
        filter: "old",
        price: "500",
        descrition: "супер не пупер белье",
        live: false
      }
    ]
  };
  let action = liveGet({ id: "1", live: true });
  let endState = ProdSlice(initialState, action);
  expect(endState.prod[0].live).toBe(true);
});
test("test correct liveGet ", () => {
  type Intype = {
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
        id: "1",
        name: "постельное",
        filter: "all",
        price: "600",
        descrition: "супер белье",
        live: false
      },
      {
        id: "2",
        name: "топовое",
        filter: "old",
        price: "300",
        descrition: "супер  пупер белье",
        live: false
      },
      {
        id: "3",
        name: "нетоповое",
        filter: "old",
        price: "500",
        descrition: "супер не пупер белье",
        live: false
      }
    ]
  };
  let action = filterName("нетоповое");
  let endState = ProdSlice(initialState, action);
  expect(endState.prod.length).toBe(1);
});
test("test correct deleteProd ", () => {
  type Intype = {
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
        id: "1",
        name: "постельное",
        filter: "all",
        price: "600",
        descrition: "супер белье",
        live: false
      },
      {
        id: "2",
        name: "топовое",
        filter: "old",
        price: "300",
        descrition: "супер  пупер белье",
        live: false
      },
      {
        id: "3",
        name: "нетоповое",
        filter: "old",
        price: "500",
        descrition: "супер не пупер белье",
        live: false
      }
    ]
  };
  let action = deleteProd("1");
  let endState = ProdSlice(initialState, action);
  expect(endState.prod.length).toBe(2);
});
test("test correct localStorage ", () => {
  type Intype = {
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
        id: "1",
        name: "постельное",
        filter: "all",
        price: "600",
        descrition: "супер белье",
        live: false
      },
      {
        id: "2",
        name: "топовое",
        filter: "old",
        price: "300",
        descrition: "супер  пупер белье",
        live: false
      },
      {
        id: "3",
        name: "нетоповое",
        filter: "old",
        price: "500",
        descrition: "супер не пупер белье",
        live: false
      }
    ]
  };
  let newProd = {
    id: "4",
    name: "нетоповое",
    filter: "old",
    price: "500",
    descrition: "супер не пупер белье",
    live: false
  };
  let action = localStorage(newProd);
  let endState = ProdSlice(initialState, action);
  console.log(endState);
  expect(endState.prod.length).toBe(4);
});
test("test correct updateName ", () => {
  type Intype = {
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
        id: "1",
        name: "постельное",
        filter: "all",
        price: "600",
        descrition: "супер белье",
        live: false
      },
      {
        id: "2",
        name: "топовое",
        filter: "old",
        price: "300",
        descrition: "супер  пупер белье",
        live: false
      },
      {
        id: "3",
        name: "нетоповое",
        filter: "old",
        price: "500",
        descrition: "супер не пупер белье",
        live: false
      }
    ]
  };
  let action = updateName({ id: "1", name: "сарафан" });
  let endState = ProdSlice(initialState, action);
  expect(endState.prod[0].name).toBe("сарафан");
});
test("test correct updatePrice ", () => {
  type Intype = {
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
        id: "1",
        name: "постельное",
        filter: "all",
        price: "600",
        descrition: "супер белье",
        live: false
      },
      {
        id: "2",
        name: "топовое",
        filter: "old",
        price: "300",
        descrition: "супер  пупер белье",
        live: false
      },
      {
        id: "3",
        name: "нетоповое",
        filter: "old",
        price: "500",
        descrition: "супер не пупер белье",
        live: false
      }
    ]
  };
  let action = updatePrice({ id: "1", price: "500" });
  let endState = ProdSlice(initialState, action);
  expect(endState.prod[0].price).toBe("500");
});
test("test correct updateFilter ", () => {
  type Intype = {
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
        id: "1",
        name: "постельное",
        filter: "all",
        price: "600",
        descrition: "супер белье",
        live: false
      },
      {
        id: "2",
        name: "топовое",
        filter: "old",
        price: "300",
        descrition: "супер  пупер белье",
        live: false
      },
      {
        id: "3",
        name: "нетоповое",
        filter: "old",
        price: "500",
        descrition: "супер не пупер белье",
        live: false
      }
    ]
  };
  let action = updateFilter({ id: "1", filter: "cold" });
  let endState = ProdSlice(initialState, action);
  expect(endState.prod[0].filter).toBe("cold");
});
