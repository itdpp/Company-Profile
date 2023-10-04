import React from "react";
import GambarAbout from "../../../assets/About/gambar.jpg"

const VisionMission = () => {
  return (
    <>
      <div className="container">
        <img className="image" src={GambarAbout} alt="Gambar" />
        <h1 className="text">Vision & Mission</h1>
      </div>

      <div className="content">
        <div className="col">
          <h2>VISION</h2>
          <p>“Menjadi perusahaan sub-contractor terbaik di bidang jasa fabrikasi dan perakitan alat angkut pada wilayah kerja pelanggan AHEMCE Group“</p>
        </div>
        <div className="col">
          <h2>MISSION</h2>
          <ul>
            <li>Develop mutually beneficial partnerships in order to create sustainable and long-lasting relationships.</li>
            <li>Exceed the expectations of our customers by delivering exceptional products and services that go above and beyond their needs and desires.</li>
            <li>Provide a safe and rewarding work environment for all employees, where they can feel valued and supported while performing their daily tasks.</li>
            <li>Grow our market share and profitability.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default VisionMission;
