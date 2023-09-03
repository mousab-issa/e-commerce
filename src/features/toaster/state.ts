import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, feature } from "./constants";

const toasterSlice = createSlice({
  name: feature,
  initialState: initialState,
  reducers: {
    showToaster: (
      state,
      action: PayloadAction<{ message: string; type: "error" | "success" }>
    ) => {
      state.isVisible = true;
      state.message = action.payload.message;
      state.type = action.payload.type;
    },
    hideToaster: (state) => {
      state.isVisible = false;
      state.message = "";
    },
  },
});

export const { showToaster, hideToaster } = toasterSlice.actions;
export default toasterSlice.reducer;
