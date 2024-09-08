import React from "react";
import BannerImage from "./BannerImage";
import ProductSearch from "./ProductSearch";
import StarRaiting from "./StarRaiting";

const Section1 = () => {
  return (
    <div className="h-auto md:h-full flex flex-col w-full pb-10">
      <div className="h-full py-5 m-auto flex md:flex-row flex-col w-full md:w-9/12">
        <BannerImage className="md:hidden block" />
        <div className="w-full md:w-2/3 gap-10 flex flex-col justify-start">
          <h1 className="text-3xl md:max-xl:text-7xl xl:text-5xl leading-[2.5rem] md:leading-[5rem] mr-0 md:mr-2 font-semibold">
            Ultimate Healthcare, Today And Tomorrow
          </h1>
          <p className="text-xl text-gray-400">
            It’s important to address your health conditions during
          </p>
          <div className="w-full md:w-1/2">
            <ProductSearch />
          </div>
        </div>
        <div className="w-11/12 md:m-0 m-auto md:w-1/3 relative mt-10">
          <BannerImage className="md:block hidden" />
          <StarRaiting className="relative md:absolute bottom-0 flex flex-col gap-4 rounded-lg border shadow shadow-gray-400/50 py-6 px-10 -translate-x-0 md:-translate-x-1/2" />
        </div>
      </div>
    </div>
  );
};

export default Section1;
