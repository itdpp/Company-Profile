import React from "react";
import Herosection from "../../../components/Fragments/Herosection";

const VisionMission = () => {
  const title = "vission & mission";
  return (
    <>
      <main className="h-full w-full">
        <Herosection content={title} />

        <div className="mx-6 my-20 md:grid md:grid-cols-2 md:gap-x-8 ">
          <div className="mb-2 xl:ml-6">
            <h2 className="mb-2 text-2xl font-semibold md:mb-6">VISION</h2>
            <p className="text-blue-800 md:w-80 lg:w-[470px] xl:w-[600px]">“Menjadi perusahaan sub-contractor terbaik di bidang jasa fabrikasi dan perakitan alat angkut pada wilayah kerja pelanggan AHEMCE Group“</p>
          </div>
          <div className="md:mr-20">
            <h2 className="mb-2 text-2xl font-semibold md:mb-6">MISSION</h2>
            <ul className="text-sm ml-6 sm:ml-8 text-blue-800 xl:ml-20">
              <li className="list-disc">Develop mutually beneficial partnerships in order to create sustainable and long-lasting relationships.</li>
              <li className="list-disc">Exceed the expectations of our customers by delivering exceptional products and services that go above and beyond their needs and desires.</li>
              <li className="list-disc">Provide a safe and rewarding work environment for all employees, where they can feel valued and supported while performing their daily tasks.</li>
              <li className="list-disc">Grow our market share and profitability.</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default VisionMission;
