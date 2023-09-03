import "styles/index.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "common/components/Layout";
import Navbar from "common/components/Navbar";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { fetchProducts, Product, ProductCard } from "features/products";

function App() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const products = useAppSelector((state) => state.product.products);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchProducts());
    };
    fetchData();
  }, []);

  const renderProduct = (product: Product) => {
    return (
      <div onClick={() => navigate(`/product-detail/${product.id}`)}>
        <ProductCard
          key={product.id}
          id={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          description={product.description}
          category={product.category}
        />
      </div>
    );
  };

  return (
    <Layout>
      <Navbar />
      <div className="w-full min-h-screen px-4 py-20 md:px-20 lg:px-32">
        <div className="flex-1 mb-12">
          <h2 className="mb-10 text-center font-poppins text-4xl font-bold text-black">
            All Products
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products?.map(renderProduct)}
        </div>
      </div>
    </Layout>
  );
}

export default App;
