import { configureStore } from "@reduxjs/toolkit";
import  productSlice  from "../features/ProductSlice";

export const store = configureStore({
  reducer: {
    products: productSlice,
  },
});
