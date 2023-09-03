import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideToaster } from "./state";

const useToasterTimer = (duration: number) => {
  const dispatch = useDispatch();
  const toaster = useSelector((state: any) => state.toaster);

  useEffect(() => {
    if (toaster.isVisible) {
      const timer = setTimeout(() => {
        dispatch(hideToaster());
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [toaster.isVisible, dispatch, duration]);

  return toaster.isVisible;
};

export default useToasterTimer;
