import React from "react";
import Image from "next/image";

const mid = () => {
  return (
    <div className="my-8 flex items-center flex-col">
      <h1 className="mt-2 font-bold text-3xl flex justify-center items-center">
        {" "}
        Browse The Range
      </h1>
      <h4 className="flex justify-center font-normal text-xl items-center mb-2">
        Lorem ipsum dolor sit dih wjhs didbnsi{" "}
      </h4>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 ">
        <div className="text-center">
          <Image height={480} width={381} alt="logo" src="/midpic.png" />
          <p className="font-semibold text-2xl  mt-8">Dining</p>
        </div>
        <div className="text-center">
          <Image height={480} width={381} alt="logo" src="/midimg2.png" />
          <p className="font-semibold text-2xl  mt-8">Living</p>
        </div>
        <div className="text-center">
          <Image height={480} width={381} alt="logo" src="/midimg3.png" />
          <p className="font-semibold text-2xl mt-8">Bedroom</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default mid;
