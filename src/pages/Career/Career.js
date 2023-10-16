import React from "react";
import BackgroundOverlay from "../../components/Fragments/BackgroundOverlay";

const Career = () => {
  const data = "Career";
  return (
    <>
      <BackgroundOverlay content={data} />
      <div className="mt-20">
        <div className="px-3 mb-10 align-top md:grid md:grid-cols-2 md:-mt-20 md:p-4 lg:px-20 lg:flex lg:flex-row lg:justify-center ">
          <div className="p-3 w-full h-full aspect-square md:p-10 lg:w-[40%] xl:w-[30%]">
            <img
              src="https://cdc.stekom.ac.id/assets/loker/49ed28da29bee89419a868e9479c7b4496bbf264.webp"
              alt="product"
              className="w-full h-full aspect-square bg-cover"
            />
          </div>
          <div className="px-4 md:p-4 lg:w-[60%]">
            <p className="underline font-semibold text-3xl my-4 ">
              Welder
            </p>
            <h2 className="my-4 text-base font-bold md:mt-0">Requirement :</h2>
            <ul className="list-disc ml-8">
              <li>Pendidikan minimal D3 untuk semua jurusan</li>
              <li>Usia maksimal 35 tahun</li>
              <li>Pengalaman min 3 tahun dibidang yang sama</li>
            </ul>
            <h2 className="my-4 text-base font-bold  mb-0">Kirimkan lamaran lengkap dan CV Anda ke email:</h2>
            <p>careerdpp01@gmail.com</p>
          </div>
        </div>
        <div className="px-3 mb-10 align-top md:grid md:grid-cols-2 md:-mt-20 md:p-4 lg:px-20 lg:flex lg:flex-row lg:justify-center ">
          <div className="p-3 w-full h-full aspect-square md:p-10 lg:w-[40%] xl:w-[30%]">
            <img
              src="https://media.licdn.com/dms/image/D5622AQFPux6I_DBW9w/feedshare-shrink_800/0/1696319673790?e=2147483647&v=beta&t=9X_Q3iLRXzn-IV-xcpezGrp_07iESe3WWGajXF3uTQM"
              alt="product"
              className="w-full h-full aspect-square bg-cover"
            />
          </div>
          <div className="px-4 md:p-4 lg:w-[60%]">
            <p className="underline font-semibold text-3xl my-4 ">
              Supervisor Site Operation
            </p>
            <h2 className="my-4 text-base font-bold md:mt-0">Requirement :</h2>
            <ul className="list-disc ml-8">
              <li>Pendidikan minimal D3 untuk semua jurusan</li>
              <li>Usia maksimal 35 tahun</li>
              <li>Pengalaman min 3 tahun dibidang yang sama</li>
              <li>Bersedia melakukan perjalanan dinas ke site</li>
              <li>Jujur, cekatan dan teliti</li>
            </ul>
            <h2 className="my-4 text-base font-bold  mb-0">Kirimkan lamaran lengkap dan CV Anda ke email:</h2>
            <p>careerdpp01@gmail.com</p>
          </div>
        </div>
        <div className="px-3 mb-10 align-top md:grid md:grid-cols-2 md:-mt-20 md:p-4 lg:px-20 lg:flex lg:flex-row lg:justify-center ">
          <div className="p-3 w-full h-full aspect-square md:p-10 lg:w-[40%] xl:w-[30%]">
            <img
              src="https://media.licdn.com/dms/image/C5622AQEGQaiTJiSVgQ/feedshare-shrink_800/0/1672109079443?e=1699488000&v=beta&t=kGfmkN3IJvFYC4uFX4sAol5ZCILbSeGWJIgHVp_pmE0"
              alt="product"
              className="w-full h-full aspect-square bg-cover"
            />
          </div>
          <div className="px-4 md:p-4 lg:w-[60%]">
            <p className="underline font-semibold text-3xl my-4 ">
              Supervisor Site Operation
            </p>
            <h2 className="my-4 text-base font-bold md:mt-0">Requirement :</h2>
            <ul className="list-disc ml-8">
              <li>Pendidikan minimal D3 untuk semua jurusan</li>
              <li>Usia maksimal 35 tahun</li>
              <li>Pengalaman min 3 tahun dibidang yang sama</li>
            </ul>
            <h2 className="my-4 text-base font-bold  mb-0">Kirimkan lamaran lengkap dan CV Anda ke email:</h2>
            <p>careerdpp01@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
