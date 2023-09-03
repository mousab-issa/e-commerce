import { FC } from "react";
import { Product } from "./types";

export const ProductCard: FC<Product> = ({ id, image, title, price }) => {
  return (
    <div className="card transition-transform transform hover:scale-105 active:scale-100 w-full h-full bg-white shadow-md p-4 duration-300 hover:cursor-pointer rounded-xl hover:shadow-lg">
      <figure className="pb-4 w-full h-52 relative">
        <img
          src={image}
          alt="image"
          className="rounded-xl object-contain object-center w-full h-full transition-transform transform hover:scale-105"
        />
      </figure>

      <h2 className="text-lg font-extrabold text-gray-800 truncate mb-2">
        {title}
      </h2>

      <p className="text-gray-700 font-semibold">${price}</p>
    </div>
  );
};
