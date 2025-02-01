import { createSlice } from "@reduxjs/toolkit";
import { products } from "../data/Data";

export const productSlice = createSlice({
  name: products,
  initialState: {
    carts: localStorage.getItem("carts")
      ? JSON.parse(localStorage.getItem("carts"))
      : [],
    cartsTapShow: false,
  },

  reducers: {
    addToCard: (state, action) => {
      const { productId, quantity } = action.payload;
      const index = state.carts.findIndex(
        (item) => item.productId === productId
      );

      if (index >= 0) {
        state.carts[index].quantity += quantity;
      } else {
        state.carts.push({ productId, quantity });
      }
      localStorage.setItem("carts", JSON.stringify(state.carts));
    },
    changeQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const index = state.carts.findIndex(
        (cart) => cart.productId === productId
      );

      if (quantity > 0) {
        state.carts[index].quantity = quantity;
      } else {
        state.carts.splice(index, 1);
      }
      localStorage.setItem("carts", JSON.stringify(state.carts));
    },

    handleCartTapShow: (state) => {
        if(state.cartsTapShow) {
          state.cartsTapShow = false
        } else {
          state.cartsTapShow = true
        }
    }
  },
});
export const { addToCard, changeQuantity ,handleCartTapShow} = productSlice.actions;
export default productSlice.reducer;
