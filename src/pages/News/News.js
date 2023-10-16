import React from "react";
import BackgroundOverlay from "../../components/Fragments/BackgroundOverlay";

export const News = () => {
  const data = "News"
  return (
    <main className="w-full h-full justify-center">

      {/*background overlay judul */}
      {/* <div className="relative -z-50 mb-10 sm:mb-14 lg:mb-20">
        <img
          src="https://products.unitedtractors.com/wp-content/uploads/2022/03/MicrosoftTeams-image-24.jpg"
          alt="Product"
          className="xl:w-full xl:h-[60vh] sm:w-full sm:h-96"
        />
        <div className="w-full h-full absolute bg-imgGelap top-0 left-0"></div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#fff] uppercase">
            News
          </h1>
        </div>
      </div> */}
      <BackgroundOverlay content={data} />

      {/* card news  */}

      <div className=" mx-auto p-3 sm:flex sm:flex-wrap sm:gap-6 sm:justify-center">
        <div className="rounded shadow-lg text-black text-left mb-9 sm:mb-0 sm:w-64 md:w-80 lg:w-72 xl:w-96  ">
          <img
            src="https://www.dpp.co.id/wp-content/uploads/2023/04/Asesmen-LSP-IMABI-2.jpg"
            alt="news"
            className="w-full rounded-t h-2/4 object-cover"
          />
          <div className="px-2 py-2">
            <div className="text-lg sm:text-sm underline font-bold text-left sm:line-clamp-2 lg:line-clamp-2 lg:text-lg xl:sm:line-clamp-none">
              Menggali Wawasan Berharga dari Kunjungan Product Marketing Manager
              Redline India, Mr. Soumitra Wagholikar
            </div>
            <p className="text-[13px] text-gray-400 font-light py-[6px]">
              August 28, 2023 No Comments
            </p>
            <div className="text-sm text-justify mb-1 line-clamp-3 sm:line-clamp-2 ">
              Menggali Wawasan Berharga dari Kunjungan Product Marketing Manager
              Redline India, Mr. Soumitra Wagholikar Pada tanggal 24 Agustus
              Redline India, Mr. Soumitra Wagholikar Pada tanggal 24 Agustus
            </div>
            <a
              href="/detailnews"
              className="text-sm font-medium  text-black underline sm:text-[13px] sm:font-semibold lg:text-sm lg:font-medium"
            >
              Read More
            </a>
          </div>
        </div>
        <div className="rounded shadow-lg text-black text-left mb-9 sm:mb-0 sm:w-64 md:w-80 lg:w-72 xl:w-96  ">
          <img
            src="https://www.dpp.co.id/wp-content/uploads/2022/08/IMG_4544.jpg"
            alt="news"
            className="w-full rounded-t h-2/4 object-cover"
          />
          <div className="px-2 py-2">
            <div className="text-lg sm:text-sm underline font-bold text-left sm:line-clamp-2 lg:line-clamp-2 lg:text-lg xl:sm:line-clamp-none">
              HUT ke 10 tahun PT Dian Pandu Pratama
            </div>
            <p className="text-[13px] text-gray-400 font-light py-[6px]">
              August 28, 2023 No Comments
            </p>
            <div className="text-sm text-justify mb-1 line-clamp-3 sm:line-clamp-2 ">
              Cikarang, 18 Juli 2022, Karyawan PT Dian Pandu Pratama bersama
              dengan seluruh cabang yang ada di Kalimantan dan Sumatera serentak
              merayakanulang tahun DPP yang ke 10 tahun
            </div>
            <a
              href="/detailnews"
              className="text-sm font-medium text-black underline sm:text-[13px] sm:font-semibold lg:text-sm lg:font-medium"
            >
              Read More
            </a>
          </div>
        </div>
        <div className="rounded shadow-lg text-black text-left mb-9 sm:mb-0 sm:w-64 md:w-80 lg:w-72 xl:w-96  ">
          <img
            src="https://www.dpp.co.id/wp-content/uploads/2023/04/Asesmen-LSP-IMABI-2.jpg"
            alt="news"
            className="w-full rounded-t h-2/4 object-cover"
          />
          <div className="px-2 py-2">
            <div className="text-lg sm:text-sm underline font-bold text-left sm:line-clamp-2 lg:line-clamp-2 lg:text-lg xl:sm:line-clamp-none">
              Menggali Wawasan Berharga dari Kunjungan Product Marketing Manager
              Redline India, Mr. Soumitra Wagholikar
            </div>
            <p className="text-[13px] text-gray-400 font-light py-[6px]">
              August 28, 2023 No Comments
            </p>
            <div className="text-sm text-justify mb-1 line-clamp-3 sm:line-clamp-2 ">
              Menggali Wawasan Berharga dari Kunjungan Product Marketing Manager
              Redline India, Mr. Soumitra Wagholikar Pada tanggal 24 Agustus
              Redline India, Mr. Soumitra Wagholikar Pada tanggal 24 Agustus
            </div>
            <a
              href="/detailnews"
              className="text-sm font-medium  text-black underline sm:text-[13px] sm:font-semibold lg:text-sm lg:font-medium"
            >
              Read More
            </a>
          </div>
        </div>
        <div className="rounded shadow-lg text-black text-left mb-9 sm:mb-0 sm:w-64 md:w-80 lg:w-72 xl:w-96  ">
          <img
            src="https://www.dpp.co.id/wp-content/uploads/2022/08/IMG_4544.jpg"
            alt="news"
            className="w-full rounded-t h-2/4 object-cover"
          />
          <div className="px-2 py-2">
            <div className="text-lg sm:text-sm underline font-bold text-left sm:line-clamp-2 lg:line-clamp-2 lg:text-lg xl:sm:line-clamp-none">
              HUT ke 10 tahun PT Dian Pandu Pratama
            </div>
            <p className="text-[13px] text-gray-400 font-light py-[6px]">
              August 28, 2023 No Comments
            </p>
            <div className="text-sm text-justify mb-1 line-clamp-3 sm:line-clamp-2 ">
              Cikarang, 18 Juli 2022, Karyawan PT Dian Pandu Pratama bersama
              dengan seluruh cabang yang ada di Kalimantan dan Sumatera serentak
              merayakanulang tahun DPP yang ke 10 tahun
            </div>
            <a
              href="/detailnews"
              className="text-sm font-medium text-black underline sm:text-[13px] sm:font-semibold lg:text-sm lg:font-medium"
            >
              Read More
            </a>
          </div>
        </div>
        <div className="rounded shadow-lg text-black text-left mb-9 sm:mb-0 sm:w-64 md:w-80 lg:w-72 xl:w-96  ">
          <img
            src="https://www.dpp.co.id/wp-content/uploads/2023/04/Asesmen-LSP-IMABI-2.jpg"
            alt="news"
            className="w-full rounded-t h-2/4 object-cover"
          />
          <div className="px-2 py-2">
            <div className="text-lg sm:text-sm underline font-bold text-left sm:line-clamp-2 lg:line-clamp-2 lg:text-lg xl:sm:line-clamp-none">
              Menggali Wawasan Berharga dari Kunjungan Product Marketing Manager
              Redline India, Mr. Soumitra Wagholikar
            </div>
            <p className="text-[13px] text-gray-400 font-light py-[6px]">
              August 28, 2023 No Comments
            </p>
            <div className="text-sm text-justify mb-1 line-clamp-3 sm:line-clamp-2 ">
              Menggali Wawasan Berharga dari Kunjungan Product Marketing Manager
              Redline India, Mr. Soumitra Wagholikar Pada tanggal 24 Agustus
              Redline India, Mr. Soumitra Wagholikar Pada tanggal 24 Agustus
            </div>
            <a
              href="/detailnews"
              className="text-sm font-medium  text-black underline sm:text-[13px] sm:font-semibold lg:text-sm lg:font-medium"
            >
              Read More
            </a>
          </div>
        </div>
        <div className="rounded shadow-lg text-black text-left mb-9 sm:mb-0 sm:w-64 md:w-80 lg:w-72 xl:w-96  ">
          <img
            src="https://www.dpp.co.id/wp-content/uploads/2022/08/IMG_4544.jpg"
            alt="news"
            className="w-full rounded-t h-2/4 object-cover"
          />
          <div className="px-2 py-2">
            <div className="text-lg sm:text-sm underline font-bold text-left sm:line-clamp-2 lg:line-clamp-2 lg:text-lg xl:sm:line-clamp-none">
              HUT ke 10 tahun PT Dian Pandu Pratama
            </div>
            <p className="text-[13px] text-gray-400 font-light py-[6px]">
              August 28, 2023 No Comments
            </p>
            <div className="text-sm text-justify mb-1 line-clamp-3 sm:line-clamp-2 ">
              Cikarang, 18 Juli 2022, Karyawan PT Dian Pandu Pratama bersama
              dengan seluruh cabang yang ada di Kalimantan dan Sumatera serentak
              merayakanulang tahun DPP yang ke 10 tahun
            </div>
            <a
              href="/detailnews"
              className="text-sm font-medium text-black underline sm:text-[13px] sm:font-semibold lg:text-sm lg:font-medium"
            >
              Read More
            </a>
          </div>
        </div>
        
      </div>
    </main>
  );
};
