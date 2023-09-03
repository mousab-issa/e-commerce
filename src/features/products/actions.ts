import { AxiosResponse } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { api } from "services";

import { feature } from "./constants";
import { Product } from "./types";
import { showToaster } from "features/toaster/state";

export const fetchProducts = createAsyncThunk(
  `${feature}/fetchProducts`,
  async (_, thunkAPI) => {
    try {
      const products: AxiosResponse<Product[]> = await api.get("products");

      return products?.data;
    } catch (error) {
      thunkAPI.dispatch(
        showToaster({
          message: "Products fetched successfully",
          type: "success",
        })
      );
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchProductsByPage = createAsyncThunk(
  `${feature}/fetchByPage`,
  async (page: number, thunkAPI) => {
    try {
      const products: AxiosResponse<Product[]> = await api.get(
        `products?page=${page}`
      );
      return products.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchProductById = createAsyncThunk(
  `${feature}//fetchByIdStatus`,
  async (id: number, thunkAPI) => {
    try {
      const response: AxiosResponse<Product> = await api.get(`products/${id}`);

      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
