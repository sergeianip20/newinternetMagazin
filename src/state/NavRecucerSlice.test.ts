import { v1 } from "uuid";
import { createMenu, deleteMenu } from "./NarReducerToolkit";
import navSlice from "./NarReducerToolkit";
test("correct delete tookit", () => {
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
  let action = createMenu("hello");
  let endState = navSlice(initialState, action);
  expect(endState.name.length).toBe(4);
});
test("correct delete tookit", () => {
  type initistateType = {
    name: Array<NameTYpe>;
  };
  type NameTYpe = {
    id: string;
    name: string;
  };

  let initialState: initistateType = {
    name: [
      { id: "1", name: "наволочки" },
      { id: "2", name: "пододеяльники" },
      { id: "3", name: "наволочки" }
    ]
  };
  let action = deleteMenu("1");
  let endState = navSlice(initialState, action);
  expect(endState.name.length).toBe(2);
});
