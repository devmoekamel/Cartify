"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CartComp from "./CartComp";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { isSignedIn, user } = useUser();
  const [logged, setlogged] = useState(false);
  const [iscart, setcart] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartList);
  useEffect(() => {
    setlogged(isSignedIn);
  }, [user]);
  const handleShowCart = () => {
    setcart(!iscart);
  };
  return (
    <header className="bg-white">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link className="block text-teal-600" href="/">
          <span className="sr-only">Home</span>
          <Image src="/logo.svg" width={45} height={45} />
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="#"
                >
                  {" "}
                  About{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="#"
                >
                  {" "}
                  Careers{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="#"
                >
                  {" "}
                  History{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="#"
                >
                  {" "}
                  Services{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="#"
                >
                  {" "}
                  Projects{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="#"
                >
                  {" "}
                  Blog{" "}
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            {logged ? (
              <div className="sm:flex sm:gap-10 items-center">
                <div className="flex gap-4">
                  <button
                    className="flex gap-x-2 items-center"
                    onClick={() => handleShowCart()}
                  >
                    <ShoppingCart />({cartItems.length})
                  </button>

                  <UserButton />
                </div>

                {iscart && <CartComp />}
              </div>
            ) : (
              <div className="flex gap-4">
                <Link
                  className="block rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-violet-700 transition "
                  href="#ProductSection"
                >
                  Start now
                </Link>
                <Link
                  className="block rounded-md bg-violet-700 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-violet-900"
                  href="/sign-in"
                >
                  Login
                </Link>
              </div>
            )}

            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
