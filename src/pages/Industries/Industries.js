import React from "react";
import { Carousel } from "flowbite-react";
import BackgroundOverlay from "../../components/Fragments/BackgroundOverlay";
import { dataIndustries, gambarAtas } from "../../data";

const Industries = () => {
  const data = "Our Business";

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

      <div className=" mx-auto text-center px-5 lg:w-[80%] lg:mb-24 lg:px-0">
        <p className="lg:font-normal lg:text-2xl text-center">
          Dalam menjalankan bisnis, kami fokus pada dua sektor ketenagakerjaan
          yaitu penyedia tenaga kerja (Manpower Support) serta penyedia jasa
          fabrikasi dan perbaikan kendaraan alat berat (Manufacturing Process &
          Fabrication Project). Di samping itu kami juga mengembangkan pada
          manpower certification serta memperluas jejaring dengan memberikan
          project pembangunan di konstruksi alat berat.
        </p>
      </div>

      <div className="grid lg:grid-cols-4  mx-auto">
        <div className="p-3 w-full h-full aspect-square lg:w-[70%] mx-auto">
          <Carousel>
            <img
              alt="12312"
              src="https://www.dpp.co.id/wp-content/uploads/2022/02/IMG_5792-150x150.jpg"
            />
            <img
              alt="12312"
              src="https://www.dpp.co.id/wp-content/uploads/2023/04/SITE-150x150.jpg"
            />
            <img
              alt="12312"
              src="https://www.dpp.co.id/wp-content/uploads/2023/04/0c76885d-0686-4296-83f9-0bf440e786b1-150x150.jpg"
            />
            <img
              alt="12312"
              src="https://www.dpp.co.id/wp-content/uploads/2023/04/Tongkang-Project-150x150.jpg"
            />
          </Carousel>
          <div className="text-center">
            <p className="uppercase font-semibold text-2xl my-4 ">
              Manufacturing Process
            </p>
            <p className="mb-4 text-justify">
              Juni 2023 – Mengingat pertumbuhan karyawan yang semakin meningkat
              dan demand terkait welder di area job site sangat tinggi
            </p>
          </div>
        </div>
        <div className="p-3 w-full h-full aspect-square lg:w-[70%] mx-auto">
          <Carousel>
            <img
              alt="12312"
              src="https://www.uniquip.co.id/wp-content/uploads/2023/02/Tambang-3-1-768x768.jpg"
            />
            <img
              alt="12312"
              src="https://www.uniquip.co.id/wp-content/uploads/2023/02/Tambang-5-1-768x768.jpg"
            />
            <img
              alt="12312"
              src="https://www.uniquip.co.id/wp-content/uploads/2023/02/Perhutanan-3-768x768.jpg"
            />
            <img
              alt="12312"
              src="https://www.uniquip.co.id/wp-content/uploads/2023/02/Industri-2-768x768.jpg"
            />
          </Carousel>
          <div className="text-center">
            <p className="uppercase font-semibold text-2xl my-4 ">
              Manpower Support on Site
            </p>
            <p className="mb-4 text-justify ">
              Juni 2023 – Mengingat pertumbuhan karyawan yang semakin meningkat
              dan demand terkait welder di area job site sangat tinggi
            </p>
          </div>
        </div>
        <div className="p-3 w-full h-full aspect-square lg:w-[70%] mx-auto">
          <Carousel>
            <img
              alt="12312"
              src="https://www.uniquip.co.id/wp-content/uploads/2023/02/Tambang-3-1-768x768.jpg"
            />
            <img
              alt="12312"
              src="https://www.uniquip.co.id/wp-content/uploads/2023/02/Tambang-5-1-768x768.jpg"
            />
            <img
              alt="12312"
              src="https://www.uniquip.co.id/wp-content/uploads/2023/02/Perhutanan-3-768x768.jpg"
            />
            <img
              alt="12312"
              src="https://www.uniquip.co.id/wp-content/uploads/2023/02/Industri-2-768x768.jpg"
            />
          </Carousel>
          <div className="text-center">
            <p className="uppercase font-semibold text-2xl my-4 ">
              Welder Certification
            </p>
            <p className="mb-4 text-justify ">
              Juni 2023 – Mengingat pertumbuhan karyawan yang semakin meningkat
              dan demand terkait welder di area job site sangat tinggi
            </p>
          </div>
        </div>
        <div className="p-3 w-full h-full aspect-square lg:w-[70%] mx-auto">
          <Carousel>
            <img
              alt="12312"
              src="https://www.uniquip.co.id/wp-content/uploads/2023/02/Tambang-3-1-768x768.jpg"
            />
            <img
              alt="12312"
              src="https://www.uniquip.co.id/wp-content/uploads/2023/02/Tambang-5-1-768x768.jpg"
            />
            <img
              alt="12312"
              src="https://www.uniquip.co.id/wp-content/uploads/2023/02/Perhutanan-3-768x768.jpg"
            />
            <img
              alt="12312"
              src="https://www.uniquip.co.id/wp-content/uploads/2023/02/Industri-2-768x768.jpg"
            />
          </Carousel>
          <div className="text-center">
            <p className="uppercase font-semibold text-2xl my-4 ">
              Fabrication Project
            </p>
            <p className="mb-4 text-justify">
              Juni 2023 – Mengingat pertumbuhan karyawan yang semakin meningkat
              dan demand terkait welder di area job site sangat tinggi
            </p>
          </div>
        </div>
      </div>

      <hr className="mt-10 mb-10" />
      <div className="text-center w-full h-full lg:mt-2">
        <h2 class="mb-8 lg:mb-16 text-3xl font-bold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
          Our Location
        </h2>
        <img
          className="w-full mt-5 my-10"
          src="https://www.dpp.co.id/wp-content/uploads/2022/02/Penyebaran_Manpower-2-768x319.png"
          alt="branch"
        />
      </div>

      <hr className="mt-10 mb-10" />
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 lg:py-10 mx-auto max-w-screen-xl px-4">
          <h2 class="mb-8 lg:mb-16 text-3xl font-bold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
            Our Clients
          </h2>
          <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-4 dark:text-gray-400 text-center">
            <img
              className="flex justify-center items-center"
              src="https://karirlab-prod-bucket.s3.ap-southeast-1.amazonaws.com/files/privates/1AFbQ0GKhNMlFwXGrpvOSjpWuW6v09eDoXZkjYqr.png"
              alt="ut"
            />
            <img
              className="flex justify-center items-center"
              src="https://www.dpp.co.id/wp-content/uploads/2022/02/PATRIA.png"
              alt="patria"
            />
            <img
              className="flex justify-center items-center mt-3"
              src="https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/1f1c9a8e7ba44a2adeef5970999a8b00.png"
              alt="triatra"
            />
            <img
              className="flex justify-center items-center"
              src="https://www.dpp.co.id/wp-content/uploads/2022/02/PMP-300x77.png"
              alt="patria"
            />
            <img
              className="flex justify-center items-center"
              src="https://www.dpp.co.id/wp-content/uploads/2022/02/PPLI-300x77.png"
              alt="patria"
            />
            <img
              className="flex justify-center items-center"
              src="https://www.dpp.co.id/wp-content/uploads/2022/03/cropped-Logo-pami-Terbaru-1-300x77.png"
              alt="patria"
            />
            <img
              className="flex justify-center items-center"
              src="https://www.dpp.co.id/wp-content/uploads/2022/02/PML.png"
              alt="patria"
            />
            <img
              className="flex justify-center items-center w-52"
              src="http://202.159.35.85/cdn/d:300/company/logo/20211003/6e8d59e8f3cacefacc4374675fb24b4b0b75618b1633230458.jpg"
              alt="patria"
            />
          </div>
        </div>
      </section>

      {/* <div className="">
        {_rendersindustries()}

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
        </div>
      </div> */}
    </>
  );
};

export default Industries;
