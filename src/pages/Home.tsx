import "styles/index.css";

import { useNavigate } from "react-router-dom";
import { Layout, Navbar } from "common";
import { useAppSelector } from "store/hooks";
import { useFetchProducts, Product, ProductCard } from "features/products";
import { Loader } from "common/components/Loader";

function App() {
  const navigate = useNavigate();
  const products = useAppSelector((state) => state.product.products);
  const loading = useAppSelector((state) => state.product.loading);

  useFetchProducts();

  const renderProduct = (product: Product) => (
    <div
      key={product.id}
      onClick={() => navigate(`/product-detail/${product.id}`)}
    >
      <ProductCard {...product} />
    </div>
  );

  return (
    <Layout>
      <Navbar />
      <div className="w-full min-h-screen p-4 md:p-8 lg:p-12 xl:p-20">
        <div className="flex-1 mb-12">
          <h2 className="mb-10 text-center font-poppins text-4xl font-bold text-black">
            All Products
          </h2>
        </div>
        {loading === "pending" && <Loader />}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products?.map(renderProduct)}
        </div>
      </div>
    </Layout>
  );
}

export default App;
