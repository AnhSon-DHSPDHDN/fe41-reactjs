import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productApis } from "../../../apis/productApis";
import { message } from "antd";

const initialState = {
  allProducts: [],
  isLoading: false,
};

export const actFetchAllProduct = createAsyncThunk(
  "product/actFetchAllProduct",
  async (payload, thunkAPI) => {
    try {
      const data = await productApis.getAllProduct();
      return data; // Những gì return sẽ đưa vào action.payload của fulfilled
    } catch (error) {
      return thunkAPI.rejectWithValue("Error call API");
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actFetchAllProduct.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(actFetchAllProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allProducts = action.payload;
    });
    builder.addCase(actFetchAllProduct.rejected, (state, action) => {
      state.isLoading = false;
      message.error("Has an errors");
    });
  },
});

export const productReducer = productSlice.reducer;
