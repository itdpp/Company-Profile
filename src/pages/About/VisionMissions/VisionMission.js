import React from "react";
import Herosection from "../../../components/Fragments/Herosection";

const VisionMission = () => {
  const title = 'vission & mission'
  return (
    <>
      <Herosection content={title}/>

      <div className="mx-6 my-20">
        <div className="mb-2">
          <h2 className="mb-2 text-2xl font-semibold">VISION</h2>
          <p className="text-blue-800">“Menjadi perusahaan sub-contractor terbaik di bidang jasa fabrikasi dan perakitan alat angkut pada wilayah kerja pelanggan AHEMCE Group“</p>
        </div>
        <div className="">
          <h2 className="mb-2 text-2xl font-semibold">MISSION</h2>
          <ul className="text-sm ml-6 text-blue-800">
            <li className="list-disc">Develop mutually beneficial partnerships in order to create sustainable and long-lasting relationships.</li>
            <li className="list-disc">Exceed the expectations of our customers by delivering exceptional products and services that go above and beyond their needs and desires.</li>
            <li className="list-disc">Provide a safe and rewarding work environment for all employees, where they can feel valued and supported while performing their daily tasks.</li>
            <li className="list-disc">Grow our market share and profitability.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default VisionMission;
