import React from "react";

import { useNavigate } from "react-router-dom";

const CardRectangle = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto w-full p-3 sm:grid sm:px-10 sm:grid-cols-1 sm:justify-center md:flex md:flex-wrap md:px-0 lg:px-0 ">
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
    </div>
  );
};

export default CardRectangle;
