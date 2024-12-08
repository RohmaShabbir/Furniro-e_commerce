"use client";

import React, { useState } from "react";

interface ProductDetailsProps {}

const ProductDetails: React.FC<ProductDetailsProps> = () => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleQuantityChange = (type: "increment" | "decrement") => {
    setQuantity((prev) => (type === "increment" ? prev + 1 : Math.max(1, prev - 1)));
  };

  return (
    <div className="bg-gray-100 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-4 sm:p-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <span>Home</span> &gt; <span>Shop</span> &gt; <span className="text-black">Asgaard sofa</span>
        </nav>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left - Product Images */}
          <div className="flex flex-col bg-[#F9F1E7] space-y-4 lg:w-1/2">
            <img
              src="/sofa1.png"
              alt="Asgaard Sofa"
              className="rounded-lg w-full"
            />
            <div className="flex space-x-2 justify-center lg:justify-start">
              {["/sofa1.png", "/sofa2.png", "/sofa4.png"].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-16 h-16 bg-white rounded-lg sm:w-20 sm:h-20"
                />
              ))}
            </div>
          </div>

          {/* Right - Product Info */}
          <div className="lg:w-1/2 flex-1">
            <h1 className="text-xl sm:text-2xl font-bold">Asgaard Sofa</h1>
            <p className="text-gray-500 text-sm sm:text-base mb-2">Rs. 250,000.00</p>
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 flex space-x-1">
                {Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i}>&#9733;</span>
                  ))}
                <span className="text-gray-400">&#9734;</span>
              </div>
              <span className="text-gray-500 text-sm ml-2">(5 Customer Reviews)</span>
            </div>
            <p className="text-gray-700 text-sm sm:text-base mb-4">
              Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
            </p>

            {/* Size Options */}
            <div className="mb-4">
              <h3 className="font-bold text-lg mb-2">Size</h3>
              <div className="flex flex-wrap gap-4">
                {["L", "XL", "XS"].map((size) => (
                  <button
                    key={size}
                    className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-200"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Options */}
            <div className="mb-4">
              <h3 className="font-bold text-lg mb-2">Color</h3>
              <div className="flex space-x-4">
                {["#000", "#6544B0", "#DAA520"].map((color, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Quantity and Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0 mb-6">
              <div className="flex items-center space-x-2 border px-4 py-2 rounded-lg">
                <button
                  onClick={() => handleQuantityChange("decrement")}
                  className="text-gray-600 hover:text-black"
                >
                  -
                </button>
                <span className="text-gray-700">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("increment")}
                  className="text-gray-600 hover:text-black"
                >
                  +
                </button>
              </div>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full sm:w-auto">
                Add to Cart
              </button>
              <button className="px-6 py-3 border rounded-lg text-gray-700 hover:bg-gray-200 w-full sm:w-auto">
                Compare
              </button>
            </div>

            {/* Additional Info */}
            <div className="text-gray-600">
              <p className="text-sm sm:text-base">
                <span className="font-bold">SKU:</span> SS001
              </p>
              <p className="text-sm sm:text-base">
                <span className="font-bold">Category:</span> Sofas
              </p>
              <p className="text-sm sm:text-base">
                <span className="font-bold">Tags:</span> Sofa, Chair, Home, Shop
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
