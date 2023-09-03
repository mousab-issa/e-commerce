import React from "react";

export const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center space-x-2">
      <div className="w-2.5 h-2.5 bg-gray-700 rounded-full animate-bounce"></div>
      <div className="w-2.5 h-2.5 bg-gray-700 rounded-full animate-bounce delay-150"></div>
      <div className="w-2.5 h-2.5 bg-gray-700 rounded-full animate-bounce delay-300"></div>
    </div>
  );
};
