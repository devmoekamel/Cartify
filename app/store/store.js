import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ProductSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
    reducer:{
    product:productReducer,
    cart:cartReducer
    }
})