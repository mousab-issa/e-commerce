import { configureStore } from "@reduxjs/toolkit";
import products, { feature as productFeature } from "features/products";

const store = configureStore({
  reducer: { [productFeature]: products },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
