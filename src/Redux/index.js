// ** Redux Toolkit Imports
import { configureStore } from "@reduxjs/toolkit";

// ** Reducer Imports
import CostReducer from "./Slices/CostSlice";

export const store = configureStore({
  reducer: {
    cost: CostReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
