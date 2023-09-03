import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "services/axios";
import { feature } from "./constants";

export const fetchProducts = createAsyncThunk(
  `${feature}/fetch`,
  async (_, thunkAPI) => {
    try {
      const products = await api.get("products/");
      return products.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchProductsByPage = createAsyncThunk(
  `${feature}/fetchByPage`,
  async (page: number, thunkAPI) => {
    try {
      const products = await api.get(`products?page=${page}`);
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
      const response = await api.get(`products/${id}`);
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
