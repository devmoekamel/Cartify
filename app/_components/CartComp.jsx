"use client";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const CartComp = () => {
  const cartItems = useSelector((state) => state.cart.cartList);

  return (
    <div className="absolute w-[300px] h-[300px] bg-slate-300 rounded-xl p-4 top-14 right-12 overflow-auto ">
      <div className="mt-4 space-y-6">
        <ul className="space-y-4">
          {cartItems.map((item) => (
            <li className="flex items-center gap-4">
              <img
                src={item.image}
                alt=""
                className="size-16 rounded object-cover"
              />

              <div>
                <h3 className="text-sm text-gray-900 line-clamp-1">
                  {item.title}
                </h3>

                <dl className="mt-0.5 space-y-px text-[12px] text-gray-600">
                  <div>
                    <dt className="inline ">Category : </dt>
                    <dd className="inline">{item.category}</dd>
                  </div>

                  <div>
                    <dt className="inline">Price:</dt>
                    <dd className="inline">{item.price}</dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ul>

        <div className="space-y-4 text-center">
          <Link
            href="/cart"
            className="block rounded border bg-gray-700 border-gray-700 px-5 py-3 text-sm text-white transition hover:ring-1 hover:ring-gray-400"
          >
            View my cart ({cartItems.length})
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartComp;
