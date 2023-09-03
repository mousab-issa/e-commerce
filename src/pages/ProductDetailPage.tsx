import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { Layout, Navbar } from "common";

import { useAppDispatch, useAppSelector } from "store/hooks";

import {
  fetchProductById,
  ProductDetailsCard,
  selectProductById,
} from "features/products";

const DetailProduct = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const product = useAppSelector(selectProductById(Number(id)));

  useEffect(() => {
    if (!product) {
      dispatch(fetchProductById(Number(id)));
    }
  }, [id, dispatch]);

  return (
    <Layout>
      <Navbar />

      {product && <ProductDetailsCard product={product} />}
    </Layout>
  );
};

export default DetailProduct;
