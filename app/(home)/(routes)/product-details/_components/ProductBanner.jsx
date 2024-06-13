import Image from "next/image";
import React from "react";

const ProductBanner = ({ product }) => {
  return (
    <Image
      className="rounded-2xl border shadow duration-700 p-5"
      src={product?.image}
      alt="product img"
      width={300}
      height={300}
    />
  );
};

export default ProductBanner;
