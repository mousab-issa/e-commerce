import { RootState } from "store";

export const selectProductById = (id: number) => (state: RootState) =>
  state.product.products?.find((product) => product.id === id);
