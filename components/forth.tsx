import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { ProductCard } from "./ProductCard";

export const products = [
  {
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    image: "/for1.png",
  },
  {
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    image: "/for4.png",
  },
  {
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    image: "/for3.png",
  },
  {
    name: "Grifo",
    description: "Night lamp",
    price: "Rp 1.500.000",
    image: "/for5.png",
  },
  {
    name: "Muggo",
    description: "Small mug",
    price: "Rp 150.000",

    image: "/for6.png",
  },
  {
    name: "Pingky",
    description: "Cute bed set",
    price: "Rp 7.000.000",
    image: "/for7.png",
  },
];

const forth = () => {
  return (
    <div className="my-8 flex items-center flex-col max-w-7xl w-full">
      <h1 className="mt-2 mb-2 font-bold text-3xl flex justify-center items-center">
        Our Products
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {products.map((product) => (
          // @ts-ignore
          <ProductCard product={product} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-5 mb-3">
        <Button className="   text-[#B88E2F] bg-white border border-[#B88E2F] rounded">
          Explore more
        </Button>
      </div>
    </div>
  );
};

export default forth;
