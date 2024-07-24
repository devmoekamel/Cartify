"use client";
import { addtocart } from "../../../../store/cartSlice";
import { List, ShoppingBag } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";

const ProductInfo = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-y-4 px-4 ">
      <h1 className="text-xl  sm:text-xl lg:text-2xl font-bold">
        {product?.title}{" "}
      </h1>
      <h3 className="text-lg  text-gray-500 flex gap-x-2 items-center ">
        <List />
        {product?.category}
      </h3>
      <p className="text-lg font-bold">{product?.description}</p>

      <h4 className="text-2xl md:text-2xl  font-bold text-yellow-600">
        {product?.price} $
      </h4>
      <button
        onClick={() => dispatch(addtocart(product))}
        className="flex gap-2 bg-violet-600 hover:bg-violet-800  duration-500 text-center self-start px-6 py-3 rounded-full text-white"
      >
        <ShoppingBag /> Add to Cart
      </button>
    </div>
  );
};

export default ProductInfo;
