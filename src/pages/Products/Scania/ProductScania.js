import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import { dataProduct } from "../../../data";

export const ProductScania = () => {
  const navigate = useNavigate();

  const products = dataProduct[0];


  const _renderProduct = () => {
    return (
      <>
        {dataProduct[0].type.map((product) => {
          return (
            <>
              <div
                onClick={() => navigate("/typescania")}
                className="px-4 text-black text-left mb-4 sm:mb-12 md:w-64 lg:w-80 xl:w-96  "
              >
                <img
                  src={product.img}
                  alt="product"
                  className="w-full h-full aspect-video bg-cover border border-gray-300 hover:-translate-y-3 hover:duration-300"
                />

                <div className="">
                  <div className="text-center text-lg uppercase italic font-light sm:text-lg sm:line-clamp-2 lg:line-clamp-2 lg:text-lg xl:sm:line-clamp-none">
                    {product.name}
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <>
      <main className="h-full w-full justify-center text-center">
        {/* judul  */}

        <div className="text-left sm:pl-14 md:pl-18 lg:pl-20 xl:pl-[100px] 2xl:pl-[200px]">
          <h2 className="text-[34px] sm:text-[44px] font-medium p-4 lg:text-[44px] xl:py-5">
            {products.name}
          </h2>
        </div>

        {/* logo atas  */}
        <div className="mt-5 mb-10 mx-auto w-52 sm:w-[300px] md:w-[380px] lg:w-[400px]">
          <img
            src={products.logo}
            className="mx-auto w-full h-full"
            alt="gambar"
          />
        </div>

        {/* card product  */}
        <div className="mx-auto w-full p-3 sm:grid sm:px-10 sm:grid-cols-1 sm:justify-center md:flex md:flex-wrap md:px-0 lg:px-0 ">
          {/* <div
            onClick={() => navigate("/typescania")}
            className="px-4 text-black text-left mb-4 sm:mb-12 md:w-64 lg:w-80 xl:w-96  "
          > */}
          {_renderProduct()}
          {/* <img
              src="https://www.uniquip.co.id/wp-content/uploads/2023/01/HYUNDAI-1-768x512.jpg"
              alt="product"
              className="w-full h-full aspect-video bg-cover border border-gray-300 hover:-translate-y-3 hover:duration-300"
            />
            <div className="">
              <div className="text-center text-lg uppercase italic font-light sm:text-lg sm:line-clamp-2 lg:line-clamp-2 lg:text-lg xl:sm:line-clamp-none">
                Dump Truck
              </div>
            </div>
          </div>
          <div
            onClick={() => navigate("/typescania")}
            className="px-4 text-black text-left mb-4 sm:mb-12 md:w-64 lg:w-80 xl:w-96  "
          >
            <img
              src="https://www.uniquip.co.id/wp-content/uploads/2023/01/HYUNDAI-1-768x512.jpg"
              alt="product"
              className="w-full h-full aspect-video bg-cover border border-gray-300 hover:-translate-y-3 hover:duration-300"
            />
            <div className="">
              <div className="text-center text-lg uppercase italic font-light sm:text-lg sm:line-clamp-2 lg:line-clamp-2 lg:text-lg xl:sm:line-clamp-none">
                Dump Truck
              </div>
            </div>
          </div>
          <div
            onClick={() => navigate("/typescania")}
            className="px-4 text-black text-left mb-4 sm:mb-12 md:w-64 lg:w-80 xl:w-96  "
          >
            <img
              src="https://www.uniquip.co.id/wp-content/uploads/2023/01/HYUNDAI-1-768x512.jpg"
              alt="product"
              className="w-full h-full aspect-video bg-cover border border-gray-300 hover:-translate-y-3 hover:duration-300"
            />
            <div className="">
              <div className="text-center text-lg uppercase italic font-light sm:text-lg sm:line-clamp-2 lg:line-clamp-2 lg:text-lg xl:sm:line-clamp-none">
                Dump Truck
              </div>
            </div> */}
          {/* </div> */}
        </div>
      </main>
    </>
  );
};
