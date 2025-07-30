import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./addtocartslice"; 
import productReducer from "./productslice";
import filterReducer from "./filterslice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    filter: filterReducer,
  },
});

export default store;
