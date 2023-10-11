import React from "react";

import { useNavigate } from "react-router-dom";
import TitleTop from "../../../components/Fragments/TitleTop";
import LogoTop from "../../../components/Fragments/LogoTop";
import TextDescription from "../../../components/Fragments/TextDescription";
import CardRectangle from "../../../components/Fragments/CardRectangle";

export const TypeScania = () => {
  const title = "Dump Truck";

  const navigate = useNavigate();
  return (
    <>
      <TitleTop content={title} />
      <LogoTop />
      <TextDescription />
      
      <div className="uppercase text-center mt-16 mb-2 sm:mb-1">
        <h2 className="text-2xl font-medium text-blue-800 sm:text-xl sm:font-normal">Dump Truck</h2>
      </div>
      {/* <CardRectangle/> */}

      <div className="mx-auto w-full p-3 sm:grid sm:px-28 sm:grid-cols-1 sm:justify-center md:flex md:flex-wrap md:justify-center md:px-0 lg:px-0 ">
      
        <div
          onClick={() => navigate("/typescania")}
          className="px-4 text-black text-left mb-4 sm:mb-4 md:w-48 lg:w-80 xl:w-96 "
        >
          <div>
            <img
              src="https://www.uniquip.co.id/wp-content/uploads/2023/01/R850LC-9-1.jpg"
              alt="product"
              className="w-full h-full aspect-square bg-cover border border-gray-300 hover:-translate-y-3 hover:duration-300"
            />
          </div>

          <div className="text-center text-lg uppercase italic font-light sm:text-[16px] lg:text-lg ">
            Dump Truck
          </div>
        </div>
        <div
          onClick={() => navigate("/typescania")}
          className="px-4 text-black text-left mb-4 sm:mb-4 md:w-48 lg:w-80 xl:w-96 "
        >
          <div>
            <img
              src="https://www.uniquip.co.id/wp-content/uploads/2023/01/R850LC-9-1.jpg"
              alt="product"
              className="w-full h-full aspect-square bg-cover border border-gray-300 hover:-translate-y-3 hover:duration-300"
            />
          </div>

          <div className="text-center text-lg uppercase italic font-light sm:text-[16px] lg:text-lg ">
            Dump Truck
          </div>
        </div>
        <div
          onClick={() => navigate("/typescania")}
          className="px-4 text-black text-left mb-4 sm:mb-4 md:w-48 lg:w-80 xl:w-96 "
        >
          <div>
            <img
              src="https://www.uniquip.co.id/wp-content/uploads/2023/01/R850LC-9-1.jpg"
              alt="product"
              className="w-full h-full aspect-square bg-cover border border-gray-300 hover:-translate-y-3 hover:duration-300"
            />
          </div>

          <div className="text-center text-lg uppercase italic font-light sm:text-[16px] lg:text-lg ">
            Dump Truck
          </div>
        </div>
        <div
          onClick={() => navigate("/typescania")}
          className="px-4 text-black text-left mb-4 sm:mb-4 md:w-48 lg:w-80 xl:w-96 "
        >
          <div>
            <img
              src="https://www.uniquip.co.id/wp-content/uploads/2023/01/R850LC-9-1.jpg"
              alt="product"
              className="w-full h-full aspect-square bg-cover border border-gray-300 hover:-translate-y-3 hover:duration-300"
            />
          </div>

          <div className="text-center text-lg uppercase italic font-light sm:text-[16px] lg:text-lg ">
            Dump Truck
          </div>
        </div>
      </div>
    </>
    // <main className="type-product">
    //   <h2 className="type-judul-product">Dump Truck</h2>
    //   <div className="gambar-logo">
    //     <img src="https://www.carlogos.org/logo/Scania-logo-6200x1800.png" />
    //   </div>
    //   <div className="type-article-product">
    //     <p>
    //       Hyundai is a well-known heavy equipment brand from South Korea. Over
    //       the years, Hyundai has strengthened its position as one of the leading
    //       heavy equipment manufacturers in the world by producing reliable and
    //       high-quality products. Additionally, Hyundai has a wide distribution
    //       network that enables customers to easily access its latest products.
    //       With a commitment to quality, innovation, and excellent service,
    //       Hyundai continues to build its reputation as a trusted brand in the
    //       heavy equipment industry.
    //     </p>
    //   </div>
    //   <div className="type-name-product">
    //     <h3>Dump Truck</h3>
    //   </div>
    //   <div className="type-wrap-product">
    //     <div className="card-product">
    //       <div className="wrap-img" onClick={() => navigate("/detailscania")}>
    //         <img
    //           src="https://products.unitedtractors.com/wp-content/uploads/2021/03/CWE28064T.png"
    //           alt="Exca"
    //         />
    //       </div>
    //       <h3 className="nama-product">Molen</h3>
    //     </div>
    //     <div className="card-product">
    //       <div className="wrap-img" onClick={() => navigate("/detailscania")}>
    //         <img
    //           src="https://products.unitedtractors.com/wp-content/uploads/2021/04/P_410_B8x4HZ-1.png"
    //           alt="Exca"
    //         />
    //       </div>
    //       <h3 className="nama-product">Dump Truck</h3>
    //     </div>
    //     <div className="card-product" onClick={() => navigate("/detailscania")}>
    //       <div className="wrap-img">
    //         <img
    //           src="https://products.unitedtractors.com/wp-content/uploads/2021/04/P_410_B8x4HZ-1.png"
    //           alt="Exca"
    //         />
    //       </div>
    //       <h3 className="nama-product">Dump Truck</h3>
    //     </div>
    //     <div className="card-product" onClick={() => navigate("/detailscania")}>
    //       <div className="wrap-img">
    //         <img
    //           src="https://products.unitedtractors.com/wp-content/uploads/2021/04/P_410_B8x4HZ-1.png"
    //           alt="Exca"
    //         />
    //       </div>
    //       <h3 className="nama-product">Dump Truck</h3>
    //     </div>
    //     <div className="card-product" onClick={() => navigate("/detailscania")}>
    //       <div className="wrap-img">
    //         <img
    //           src="https://products.unitedtractors.com/wp-content/uploads/2021/04/P_410_B8x4HZ-1.png"
    //           alt="Exca"
    //         />
    //       </div>
    //       <h3 className="nama-product">Dump Truck</h3>
    //     </div>
    //   </div>
    // </main>
  );
};
