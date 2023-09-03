import { useNavigate, useParams } from "react-router-dom";
import { FC, Fragment, useEffect } from "react";
import axios from "axios";

import Layout from "common/components/Layout";
import Navbar from "common/components/Navbar";
import { useAppSelector } from "store/hooks";
import { selectProductById } from "./selectors";
import { Product } from "./types";

interface ProductDetailsCardProps {
  product: Product;
}
export const ProductDetailsCard: FC<ProductDetailsCardProps> = ({
  product,
}) => {
  return (
    <Fragment>
      <section className="flex justify-center items-center gap-10 mx-40 border-2 border-customcyan p-10 rounded-t-3xl">
        <div className="border-2 border-customcyan rounded-2xl p-4">
          <img
            src={product?.image}
            alt="image"
            className="w-72 h-72 rounded-2xl"
          />
        </div>
        <div className="flex flex-col gap-16">
          <div className="flex items-center gap-10">
            <div className="flex flex-col gap-5 w-3/5">
              <div className="font-bold text-xl">{product?.title}</div>

              <div className="w-fit py-2 px-5 mt-1 border-2 border-customcyan rounded-xl text-center">
                USD {product?.price} ,-
              </div>
            </div>
          </div>
          <div className="flex justify-center border-2 bg-customcyan rounded-2xl p-3 text-white font-semibold duration-300 hover:cursor-pointer  active:scale-95">
            Add to cart
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-5 mx-40 mt-5 mb-10 border-2 border-customcyan p-10 rounded-b-3xl">
        <span className="text-customcyan font-semibold">Description</span>
        <span>{product?.description}</span>
      </section>
    </Fragment>
  );
};
