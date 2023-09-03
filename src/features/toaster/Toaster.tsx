import { FC } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { hideToaster } from "./state";
import useToasterTimer from "./useToasterTimer";

export const Toaster: FC = () => {
  const dispatch = useAppDispatch();
  const toaster = useAppSelector((state) => state.toaster);

  useToasterTimer(3000);

  const toasterBackground =
    toaster.type === "error" ? "bg-red-500" : "bg-green-500";

  return (
    <div
      onClick={() => dispatch(hideToaster())}
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 p-4 ${toasterBackground} text-white rounded shadow-md cursor-pointer transition-all duration-300 hover:scale-105 ${
        toaster.isVisible
          ? "-translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
    >
      {toaster.message}
    </div>
  );
};
