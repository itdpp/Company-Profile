import React from "react";
import { Carousel } from "flowbite-react";
import { dataCsr, gambarAtas } from "../../data";
import BackgroundOverlay from "../../components/Fragments/BackgroundOverlay";

const ProgramCSR = () => {
  const data = "Program CSR";

  const _programCsr = () => {
    return (
      <>
        {dataCsr.map((programcsr) => {
          return (
            <>
              {/* <div className="px-3 align-top md:grid md:grid-cols-2 md:-mt-20 md:p-4 lg:px-20 lg:flex lg:flex-row lg:justify-center "> */}
              <div className="p-3 w-full h-full aspect-video md:p-10 lg:w-[80%] xl:w-[60%] mx-auto">
                <Carousel>
                  <img alt="12312" src={programcsr.img} />
                  <img alt="12312" src={programcsr.img1} />
                  <img alt="12312" src={programcsr.img2} />
                  <img alt="12312" src={programcsr.img3} />
                </Carousel>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <>
      <BackgroundOverlay gambar={gambarAtas[0].csr} content={data} />

      <div className="">
      <h2 class="mb-8 lg:mb-10 text-3xl font-bold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
          Our Mission
        </h2>
        <div className=" mx-auto text-center px-5 lg:w-[80%] lg:mb-10 lg:px-0">
        <p className="lg:font-normal lg:text-2xl text-center">
          Dalam menjalankan bisnis, kami fokus pada dua sektor ketenagakerjaan
          yaitu penyedia tenaga kerja (Manpower Support) serta penyedia jasa
          fabrikasi dan perbaikan kendaraan alat berat (Manufacturing Process &
          Fabrication Project). Di samping itu kami juga mengembangkan pada
          manpower certification serta memperluas jejaring dengan memberikan
          project pembangunan di konstruksi alat berat.
        </p>
      </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:w-[1000px] mx-auto">
        <img src="https://www.dpp.co.id/wp-content/uploads/2022/04/3.png" className="mx-auto w-96 lg:w-full" />
        <img src="https://www.dpp.co.id/wp-content/uploads/2022/04/4.png" className="mx-auto w-96 lg:w-full" />
        <img src="https://www.dpp.co.id/wp-content/uploads/2022/04/1.png" className="mx-auto w-96 lg:w-full"/>
        <img src="https://www.dpp.co.id/wp-content/uploads/2022/04/2.png" className="mx-auto w-96 lg:w-full"/>
      </div>

      {_programCsr()}
    </>
  );
};

export default ProgramCSR;
