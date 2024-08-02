import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

const mockUsersData = [
  {
    id: 1,
    username: "sontva",
    password: "123",
    fullName: "SonTVA",
  },
  {
    id: 2,
    username: "admin",
    password: "123",
    fullName: "Admin",
  },
];

const initialState = {
  userInfo: {},
  accessToken: "", // tự định nghĩa token = username
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    actLogin: (state, action) => {
      const { username, password } = action.payload;
      const existedAccount = mockUsersData.find(
        (acc) => acc.username === username && acc.password === password
      );

      if (existedAccount) {
        state.userInfo = { ...existedAccount };
        state.accessToken = username;
        message.success("Login success");
      } else {
        message.error("Username or password incorrect");
      }
    },
  },
});

export const { actLogin } = authSlice.actions;
export const authReducer = authSlice.reducer;
