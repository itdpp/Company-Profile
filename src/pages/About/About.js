import React from 'react'
import "./about.css"
import GambarAbout from "../../assets/About/gambar.jpg"


const About = () => {
  return (
    <>
   <div className="relative -z-50">
        <img
          src={GambarAbout}
          alt="Product"
          className="xl:w-full xl:h-[60vh] sm:w-1/2 sm:h-96 lg:w-full lg:h-hero"
        />
        <div className="w-full h-full absolute bg-imgGelap top-0 left-0"></div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold text-[#fff]">About Us</h1>
        </div>
      </div>

    <div className='flex p-[5%] justify-between'>
      <div className='border-slate-950 border-2 shadow-3xl '>
      <img className='w-[800px] h-full' src={GambarAbout}/>
      </div>
      <div className=''>
        <ul>
          <li><p>PT Dian Pandu Pratama</p></li>
          <li>PT Dian Pandu Pratama adalah perusahaan yang berdiri sejak tahun 2012 dan bergerak dalam bidang Job & Labour Supply.</li>
          <li>Manpower kami telah tersebar di berbagai daerah Kalimantan & Sumatera dengan jumlah lebih dari 1700.</li>
          <li>Komitmen kami adalah mengutamakan kepuasan para pelanggan dan memberikan pelayan yang terbaik yang didukung para teknisi yang berpengalaman serta menggunakan mesin & peralatan yang lengkap.</li>
          </ul>
      </div>

    </div>
    </>
  )
}

export default About