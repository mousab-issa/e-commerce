import { configureStore } from "@reduxjs/toolkit";
import products, { feature as productFeature } from "features/products";
import toaster, { feature as toasterFeature } from "features/toaster";

const store = configureStore({
  reducer: { [productFeature]: products, [toasterFeature]: toaster },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
