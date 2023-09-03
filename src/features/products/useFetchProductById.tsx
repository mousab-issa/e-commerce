import { useEffect } from "react";

import { useAppDispatch } from "store/hooks";

import { fetchProductById, Product } from "features/products";

/**
 * Custom hook to fetch a product by its ID if the product is not already loaded.
 *
 * @param product The product object (or null/undefined if not loaded)
 * @param id The ID of the product to be fetched
 */
export const useFetchProductById = (
  product: Product | null | undefined,
  id?: string | number
) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!product) {
      dispatch(fetchProductById(Number(id)));
    }
  }, [id, dispatch, product]);
};
