"use client";
import { addtocart } from "@/app/store/cartSlice";
import { List, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="shadow hover:shadow-xl hover:border rounded-xl duration-700 ">
      <Link href={`/product-details/${product.id}`}>
        <div className="flex justify-center">
          <Image
            className="rounded-t-lg h-[200px] object-cover  scale-75 hover:scale-100 duration-700"
            src={product.image}
            alt="product img"
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col gap-y-3 p-4 text-left ">
          <h2 className="text-lg font-bold line-clamp-1 text-violet-700 duration-700">
            {product.title}
          </h2>
          <h3 className="flex gap-x-3 text-lg text-gray-500">
            <List /> {product.category}
          </h3>
        </div>
      </Link>
      <div className="flex justify-between items-center px-3  pb-4 ">
        <h2 className="text-lg font-bold">{product.price}$</h2>
        <button
          onClick={() => dispatch(addtocart(product))}
          className="px-3 py-3 bg-black rounded-2xl"
        >
          <ShoppingBag className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
