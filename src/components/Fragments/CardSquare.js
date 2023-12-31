import React from "react";
import { useNavigate } from "react-router-dom";
import { dataScania } from "../../data";

const CardSquare = () => {
  const navigate = useNavigate();


  return (
    <>
      <div className="uppercase text-center mt-16 mb-2 sm:mb-1">
        <h2 className="text-2xl font-medium text-blue-800 sm:text-xl sm:font-normal lg:font-medium lg:text-[22px]">
          Dump Truck
        </h2>
      </div>
      {/* <CardSquare/> */}

      <div className="mx-auto w-full p-3 sm:grid sm:px-28 sm:grid-cols-1 sm:justify-center md:flex md:flex-wrap md:justify-center md:px-0 lg:px-0 xl:px-10 2xl:px-">
        <div
          onClick={() => navigate("/detailscania")}
          className="px-4 text-black text-left mb-4 sm:mb-4 md:w-48 lg:w-56 lg:px-0 lg:mx-2 xl:w-64 "
        >
          <div>
            <img
              src="https://products.unitedtractors.com/wp-content/uploads/2021/04/P_410_B8x4HZ-1.png"
              alt="product"
              className="w-full h-full aspect-square bg-cover border border-gray-300 hover:-translate-y-3 hover:duration-300"
            />
          </div>

          <div className="text-center text-lg uppercase italic font-light sm:text-[16px] lg:font-normal ">
            Dump Truck
          </div>
        </div>
        <div
          onClick={() => navigate("/detailscania")}
          className="px-4 text-black text-left mb-4 sm:mb-4 md:w-48 lg:w-56 lg:px-0 lg:mx-2 xl:w-64 "
        >
          <div>
            <img
              src="https://products.unitedtractors.com/wp-content/uploads/2021/04/P_410_B8x4HZ-1.png"
              alt="product"
              className="w-full h-full aspect-square bg-cover border border-gray-300 hover:-translate-y-3 hover:duration-300"
            />
          </div>

          <div className="text-center text-lg uppercase italic font-light sm:text-[16px] lg:font-normal ">
            Dump Truck
          </div>
        </div>
        <div
          onClick={() => navigate("/detailscania")}
          className="px-4 text-black text-left mb-4 sm:mb-4 md:w-48 lg:w-56 lg:px-0 lg:mx-2 xl:w-64 "
        >
          <div>
            <img
              src="https://products.unitedtractors.com/wp-content/uploads/2021/04/P_410_B8x4HZ-1.png"
              alt="product"
              className="w-full h-full aspect-square bg-cover border border-gray-300 hover:-translate-y-3 hover:duration-300"
            />
          </div>

          <div className="text-center text-lg uppercase italic font-light sm:text-[16px] lg:font-normal ">
            Dump Truck
          </div>
        </div>
        <div
          onClick={() => navigate("/detailscania")}
          className="px-4 text-black text-left mb-4 sm:mb-4 md:w-48 lg:w-56 lg:px-0 lg:mx-2 xl:w-64 "
        >
          <div>
            <img
              src="https://products.unitedtractors.com/wp-content/uploads/2021/04/P_410_B8x4HZ-1.png"
              alt="product"
              className="w-full h-full aspect-square bg-cover border border-gray-300 hover:-translate-y-3 hover:duration-300"
            />
          </div>

          <div className="text-center text-lg uppercase italic font-light sm:text-[16px] lg:font-normal ">
            Dump Truck
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSquare;
