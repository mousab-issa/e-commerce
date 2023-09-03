import { Rating } from "common";
import { FC, Fragment } from "react";
import { Product } from "./types";

interface ProductDetailsCardProps {
  product: Product;
}

export const ProductDetailsCard: FC<ProductDetailsCardProps> = ({
  product,
}) => {
  return (
    <Fragment>
      <section className="md:flex md:justify-center md:items-center gap-10 mx-5 md:mx-40 my-5 p-4 md:p-10 border-2 rounded-xl shadow-lg">
        <div className="flex justify-center p-4 transition-transform transform">
          <img
            src={product?.image}
            alt="image"
            className="w-full md:w-72 h-72 object-contain rounded-xl"
          />
        </div>
        <div className="flex flex-col gap-6">
          <div className="space-y-4">
            <h2 className="font-bold text-2xl mb-2 text-gray-800">
              {product?.title}
            </h2>
            <Rating value={product?.rating?.rate || 0} />
            <div className="py-1 px-3 bg-gray-100 border-2 border-gray-300 rounded-md text-center">
              USD {product?.price}
            </div>
          </div>
          <button className="self-center py-2 px-5 bg-blue-500 hover:bg-blue-600 border-2 border-blue-500 rounded-md text-white font-semibold duration-300 hover:bg-white  focus:outline-none transform transition-transform hover:scale-95">
            Add to cart
          </button>
        </div>
      </section>
      <section className="mx-5 md:mx-40 mt-5 mb-10 p-4 md:p-10 border-2 rounded-xl shadow-md transition-shadow hover:shadow-lg">
        <h3 className="mb-2 text-gray-800 font-semibold">Description</h3>
        <p className="text-gray-600">{product?.description}</p>
      </section>
    </Fragment>
  );
};
