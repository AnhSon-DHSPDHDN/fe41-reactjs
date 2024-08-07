import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import { userApis } from "../../../apis/userApis";
import { globalNavigate } from "../../../utils/globalNavigate";

const initialState = {
  userInfo: {},
  accessToken: "", // tự định nghĩa token = username
};

export const actLoginThunk = createAsyncThunk(
  "auth/actLoginThunk",
  async (payload, thunkAPI) => {
    const { username, password } = payload;
    const allUsersData = await userApis.getAllUsers();
    const existedAccount = allUsersData.find(
      (acc) => acc.username === username && acc.password === password
    );

    if (existedAccount) {
      return existedAccount;
    } else {
      message.error("Username or password incorrect");
      return thunkAPI.rejectWithValue("Username or password incorrect");
    }
  }
);

export const actGetInfoMe = createAsyncThunk(
  "auth/actGetInfoMe",
  async (payload, thunkAPI) => {
    const username = localStorage.getItem("accessToken");
    const allUsersData = await userApis.getAllUsers();

    const existedAccount = allUsersData.find(
      (acc) => acc.username === username
    );

    if (existedAccount) {
      return existedAccount;
    } else {
      return thunkAPI.rejectWithValue("Username or password incorrect");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    actLogout: (state, action) => {
      state.userInfo = {};
      state.accessToken = "";
      localStorage.removeItem("accessToken");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actLoginThunk.fulfilled, (state, action) => {
      state.userInfo = action.payload;
      state.accessToken = action.payload.username;
      localStorage.setItem("accessToken", action.payload.username);
      message.success("Login Success");
      globalNavigate("/home");
    });
    builder.addCase(actGetInfoMe.fulfilled, (state, action) => {
      state.userInfo = action.payload;
      state.accessToken = action.payload.username;
    });
  },
});

export const { actLogout } = authSlice.actions;
export const authReducer = authSlice.reducer;
