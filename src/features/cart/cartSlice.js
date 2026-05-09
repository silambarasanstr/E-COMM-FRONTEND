import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const exist = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );

      if (exist) {
        // already irundha → quantity increase
        exist.quantity += action.payload.quantity || 1;
      } else {
        // pudhusa add
        state.cartItems.push({
          ...action.payload,
          quantity: action.payload.quantity || 1,
        });
      }
    },
    // 🧹 Clear
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
