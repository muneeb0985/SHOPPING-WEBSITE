
import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const exists = state.products.find(p => p.id === action.payload.id);
      if (exists) {
        alert("Product is already in cart");
      } else {
        state.products.push({ ...action.payload, qty: 1 });
        alert("Product added to cart");
      }
    },

    removeFromCart: (state, action) => {
      state.products = state.products.filter(p => p.id !== action.payload.id);
    },

    incrementQty: (state, action) => {
      const product = state.products.find(p => p.id === action.payload.id);
      if (product) product.qty += 1;
    },

    decrementQty: (state, action) => {
      const product = state.products.find(p => p.id === action.payload.id);
      if (product && product.qty > 1) product.qty -= 1;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQty,
  decrementQty
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
