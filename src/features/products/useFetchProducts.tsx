import { useEffect } from "react";

import { useAppDispatch } from "store/hooks";

import { fetchProducts } from "./actions";

export const useFetchProducts = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
};
