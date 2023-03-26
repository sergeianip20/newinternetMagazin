import LoginReducer from "./LoginReducer";
import { AuthUser, LoginType } from "./LoginReducer";
import { v1 } from "uuid";
test("correct auth login", () => {
  const initialState: LoginType = {
    userId: "",
    name: "",
    email: "",
    password: "",
    isAdmin: false,
    isLogin: false
  };

  let userItem = {
    userId: v1(),
    name: "sergein",
    email: "sergeianip20@gmail.com",
    password: "123456"
  };

  let action = AuthUser(userItem);
  let endState = LoginReducer(initialState, action);
  expect(endState.name).toBe("sergein");
  expect(endState.isLogin).toBe(true);
});
