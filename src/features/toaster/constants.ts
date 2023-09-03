import { ToasterState } from "./types";

export const initialState: ToasterState = {
  isVisible: false,
  message: "",
  type: "success",
};

export const feature = "toaster";
