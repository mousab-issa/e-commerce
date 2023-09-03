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

        if (!action.payload) {
          return;
        }

        const productMap = new Map(
          state.products.map((product) => [product.id, product])
        );

        action.payload.forEach((product) => {
          productMap.set(product.id, product); // This ensures no duplicates as IDs are unique keys
        });

        state.products = [...productMap.values()];
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
        if (!action.payload) {
          return;
        }

        state.products = [...state.products, action.payload];
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = "idle";
      });
  },
});

export default productsSlice.reducer;
