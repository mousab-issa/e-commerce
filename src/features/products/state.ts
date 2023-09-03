import { createSlice } from "@reduxjs/toolkit";
import { fetchProductById, fetchProducts } from "./actions";
import { initialState } from "./constants";

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message || "Failed to fetch products";
      })

      .addCase(fetchProductById.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = "idle";
        state.products.push(action.payload);
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = "idle";
      });
  },
});

export default productsSlice.reducer;
