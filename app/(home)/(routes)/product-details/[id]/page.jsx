"use client";
import React, { useEffect } from "react";
import ProductBanner from "../_components/ProductBanner";
import ProductInfo from "../_components/ProductInfo";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductbyId,
  fetchProductsbyCategory,
} from "../../../../store/ProductSlice.js";
import ProductList from "../../_components/ProductList";

const ProductDetails = ({ params }) => {
  const product = useSelector((state) => state.product.ProductInfo);
  const similarProducts = useSelector((state) => state.product.Productlist);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductbyId(params.id));
    dispatch(fetchProductsbyCategory(product.category));
  }, [params.id, product]);
  return (
    <div className="container mx-auto my-16">
      <div className="flex flex-col md:flex-row justify-around items-center gap-4 md:mx-5">
        <ProductBanner product={product} />
        <ProductInfo product={product} />
      </div>
      <div className="flex flex-col gap-y-6 mt-6cl">
        <div className="text-center text-4xl">
          <h1>Similar Products</h1>
        </div>
        <div className="">
          <ProductList products={similarProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
