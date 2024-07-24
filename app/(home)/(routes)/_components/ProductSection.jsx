"use client";
import React, { useEffect } from "react";
import ProductList from "./ProductList";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../store/ProductSlice.js";

const ProductSection = () => {
  const products = useSelector((state) => state.product.Productlist);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div id="ProductSection" className="container mx-auto my-16">
      <div className="text-center my-10">
        <h1 className="text-4xl font-bold">Choose now</h1>
      </div>
      <ProductList products={products} />
    </div>
  );
};

export default ProductSection;
