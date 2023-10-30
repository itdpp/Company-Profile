import React from "react";
import { Carousel } from "flowbite-react";
import BackgroundOverlay from "../../components/Fragments/BackgroundOverlay";
import { dataIndustries, gambarAtas } from "../../data";

const Industries = () => {
  const data = "Industries";

  const _rendersindustries = () => {
    return (
      <>
        {dataIndustries.map((industries) => {
          return (
            <>
              <div className="px-3 align-top md:grid md:grid-cols-2 md:-mt-20 md:p-4 lg:px-20 lg:flex lg:flex-row lg:justify-center ">
                <div className="p-3 w-full h-full aspect-square md:p-10 lg:w-[40%] xl:w-[30%]">
                  <Carousel>
                    <img alt="12312" src={industries.img} />
                    <img alt="12312" src={industries.img1} />
                    <img alt="12312" src={industries.img2} />
                    <img alt="12312" src={industries.img3} />
                  </Carousel>
                </div>
                <div className="px-4 md:p-4 lg:w-[60%]">
                  <p className="uppercase font-semibold text-2xl my-4 ">
                    {industries.judul}
                  </p>
                  <p className="mb-4 ">{industries.desc}</p>
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
      <BackgroundOverlay content={data} gambar={gambarAtas[0].industries} />

      <div>
        {_rendersindustries()}

        {/* <div className="px-3 align-top md:grid md:grid-cols-2 md:-mt-20 md:p-4 lg:px-20 lg:flex lg:flex-row lg:justify-center ">
          <div className="p-3 w-full h-full aspect-square md:p-10 lg:w-[40%] xl:w-[30%]">
            <Carousel>
              <img
                alt="12312"
                src="https://www.uniquip.co.id/wp-content/uploads/2023/02/Tambang-3-1-768x768.jpg"
              />
              <img
                alt="..."
                src="https://www.uniquip.co.id/wp-content/uploads/2023/02/Tambang-5-1-768x768.jpg"
              />
              <img
                alt="..."
                src="https://www.uniquip.co.id/wp-content/uploads/2023/02/Perhutanan-3-768x768.jpg"
              />
              <img
                alt="..."
                src="https://www.uniquip.co.id/wp-content/uploads/2023/02/Industri-2-768x768.jpg"
              />
              <img
                alt="..."
                src="https://www.uniquip.co.id/wp-content/uploads/2023/02/Industri-3-768x768.jpg"
              />
            </Carousel>
          </div>
          <div className="px-4 md:p-4 lg:w-[60%]">
            <p className="uppercase font-semibold text-2xl my-4 ">Pertambangan</p>
            <p className="mb-4 ">
              Uniquip merupakan salah satu penyedia alat berat pertambangan yang
              memiliki komitmen untuk memberikan solusi terbaik bagi industri
              pertambangan di Indonesia. Uniquip telah terbukti mampu memberikan
              dukungan teknis dan sparepart yang diperlukan untuk menjaga
              memiliki komitmen untuk memberikan solusi terbaik bagi industri
              pertambangan di Indonesia. Uniquip telah terbukti mampu memberikan
              memiliki komitmen untuk memberikan solusi terbaik bagi industri
              pertambangan di Indonesia. Uniquip telah terbukti mampu memberikan
            </p>
          </div>
        </div>
        <div className="px-3 align-top md:grid md:grid-cols-2 md:-mt-20 md:p-4 lg:px-20 lg:flex lg:flex-row lg:justify-center ">
          <div className="p-3 w-full h-full aspect-square md:p-10 lg:w-[40%] xl:w-[30%]">
            <Carousel>
              <img
                alt="12312"
                src="https://www.uniquip.co.id/wp-content/uploads/2023/02/Tambang-3-1-768x768.jpg"
              />
              <img
                alt="..."
                src="https://www.uniquip.co.id/wp-content/uploads/2023/02/Tambang-5-1-768x768.jpg"
              />
              <img
                alt="..."
                src="https://www.uniquip.co.id/wp-content/uploads/2023/02/Perhutanan-3-768x768.jpg"
              />
              <img
                alt="..."
                src="https://www.uniquip.co.id/wp-content/uploads/2023/02/Industri-2-768x768.jpg"
              />
              <img
                alt="..."
                src="https://www.uniquip.co.id/wp-content/uploads/2023/02/Industri-3-768x768.jpg"
              />
            </Carousel>
          </div>
          <div className="px-4 md:p-4 lg:w-[60%]">
            <p className="uppercase font-semibold text-2xl my-4 ">Pertambangan</p>
            <p className="mb-4 ">
              Uniquip merupakan salah satu penyedia alat berat pertambangan yang
              memiliki komitmen untuk memberikan solusi terbaik bagi industri
              pertambangan di Indonesia. Uniquip telah terbukti mampu memberikan
              dukungan teknis dan sparepart yang diperlukan untuk menjaga
              memiliki komitmen untuk memberikan solusi terbaik bagi industri
              pertambangan di Indonesia. Uniquip telah terbukti mampu memberikan
              memiliki komitmen untuk memberikan solusi terbaik bagi industri
              pertambangan di Indonesia. Uniquip telah terbukti mampu memberikan
            </p>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Industries;
