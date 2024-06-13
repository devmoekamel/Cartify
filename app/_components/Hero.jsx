import Image from "next/image";
import { Container } from "postcss";
import React from "react";

const Hero = () => {
  return (
    <header className="container mx-auto mt-7">
      <div className="flex flex-col-reverse gap-y-10  md:flex-row  justify-around items-center gap-4 mx-5">
        <div className="flex flex-col gap-y-7 text-center md:text-left">
          <div>
            <h1 className="text-4xl font-bold">
              One <span className="text-violet-700">Click</span> Away
            </h1>
            <h2 className="text-4xl font-bold">
              from buying your <span className="text-violet-700">Stuff</span>
            </h2>
          </div>
          <button className="px-8 py-3 bg-violet-700 text-white rounded-full hover:bg-violet-900 duration-700 self-center md:self-start">
            <a href="#ProductSection">Buy Now</a>
          </button>
        </div>
        <div className="">
          <Image src="/shopping.svg" width={450} height={450} />
        </div>
      </div>
    </header>
  );
};

export default Hero;
