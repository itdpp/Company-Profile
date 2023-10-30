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
        <p className="text-3xl text-center font-semibold text-gray-700  px-0 py-3 my-3">
          Our Mission
        </p>
        <p className="mx-auto text-lg text-justify px-2 lg:w-[1000px] mb-0">
          Dalam memajukan masyarakat sekitar perusahaan, PT Dian Pandu Pratama
          komit untuk melakukan program Corporate Social Responsibility (CSR) di
          sekitar ring 1 dan juga daerah Kota Bekasi. CSR PT Dian Pandu Pratama
          memiliki 4 pilar (DPP Care, DPP Health, DPP Education, dan DPP Green)
          yang bertujuan untuk memajukan daerah berdasarkan kebutuhan masyarakat
          sekitar.
        </p>
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
