import React from "react";
import BackgroundOverlay from "../../components/Fragments/BackgroundOverlay";
import { dataNews, gambarAtas } from "../../data";
import { Link } from "react-router-dom";

export const News = () => {
  const data = "News";

  const _renderNews = () => {
    return (
      <>
        {dataNews.map((news) => {
          return (
            <div
              className="rounded shadow-lg text-black text-left mb-9 sm:mb-0 sm:w-64 md:w-80 lg:w-72 xl:w-96"
              key={news.id}
            >
              <img
                src={news.img}
                alt="news"
                className="w-full rounded-t h-2/4 object-cover"
              />
              <div className="px-2 py-2">
                <div className="text-lg sm:text-sm underline font-bold text-left sm:line-clamp-2 lg:line-clamp-2 lg:text-lg xl:sm:line-clamp-none">
                  {news.judul}
                </div>
                <p className="text-[13px] text-gray-400 font-light py-[6px]">
                  {news.tgl}
                </p>
                <div className="text-sm text-justify mb-1 line-clamp-3 sm:line-clamp-2 ">
                  {news.desc}
                </div>
                <Link
                  to={`/detailnews/${news.id}`}
                  className="text-sm font-medium  text-black underline sm:text-[13px] sm:font-semibold lg:text-sm lg:font-medium"
                >
                  Read More
                </Link>
                {/* <a
                  href="/detailnews"
                  className="text-sm font-medium  text-black underline sm:text-[13px] sm:font-semibold lg:text-sm lg:font-medium"
                >
                  Read More
                </a> */}
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <main className="w-full h-full justify-center mb-10">
      <BackgroundOverlay content={data} gambar={gambarAtas[0].news} />
      {/* card news  */}
      <div className=" mx-auto p-3 sm:flex sm:flex-wrap sm:gap-6 sm:justify-center">
        {_renderNews()}
      </div>
    </main>
  );
};
