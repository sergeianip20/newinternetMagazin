import { createSlice } from "@reduxjs/toolkit";
import { v1 } from "uuid";

export type LoginType = {
  userId: string;
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  isLogin: boolean;
};

const initialState: LoginType = {
  userId: "",
  name: "",
  email: "",
  password: "",
  isAdmin: false,
  isLogin: false
};

const LoginReducer = createSlice({
  name: "login",
  initialState,
  reducers: {
    AuthUser(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isLogin = true;
      state.password = action.payload.password;
    }
  }
});

export default LoginReducer.reducer;
export const { AuthUser } = LoginReducer.actions;
