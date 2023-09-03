import { FC } from "react";

type RatingProps = {
  value: number;
  max?: number;
};

export const Rating: FC<RatingProps> = ({ value, max = 5 }) => {
  return (
    <div className="flex">
      {Array.from({ length: max }).map((_, index) => (
        <svg
          key={index}
          className={`h-5 w-5 ${
            index < value ? "text-yellow-500" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"></path>
        </svg>
      ))}
    </div>
  );
};
