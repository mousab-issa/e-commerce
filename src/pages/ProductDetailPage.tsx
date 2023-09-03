import { useParams } from "react-router-dom";

import { Layout, Navbar } from "common";

import { useAppSelector } from "store/hooks";

import {
  ProductDetailsCard,
  selectProductById,
  useFetchProductById,
} from "features/products";

const DetailProduct = () => {
  const { id } = useParams();

  const product = useAppSelector(selectProductById(Number(id)));

  useFetchProductById(product, id);

  return (
    <Layout>
      <Navbar />

      {product && <ProductDetailsCard product={product} />}
    </Layout>
  );
};

export default DetailProduct;
