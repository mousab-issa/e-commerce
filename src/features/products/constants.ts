import { initialStateType } from "./types";

export const feature = "product";

export const initialState: initialStateType = {
  products: [],
  loading: "idle",
  error: null,
  currentPage: 0,
  totalPages: 0,
  limit: 0,
};
