import React from 'react'
import GambarAbout from "../../assets/About/gambar.jpg"
import Herosection from '../../components/Fragments/Herosection'

const About = () => {
  const title = 'About Us'
  return (
    <>
    <main className='h-full w-full'>
    <Herosection content={title}/>
    <div className='md:grid md:grid-cols-2 md:mx-8 '>
      <div className='border-slate-950 border-2 shadow-3xl w-fit mx-auto my-12 md:h-48 md:mt-3 md:ml-12 lg:h-60 lg:w-96 xl:h-80 xl:w-[550px]'>
      <img className='object-cover w-fit h-40 sm:h-80 md:h-48 lg:w-96 lg:h-60 xl:h-80 xl:w-[550px]' src={GambarAbout}/>
      </div>
      <div className='mx-auto mb-12 text-justify px-7 sm:px-10 '>
        <ul>
          <li><p className='font-bold text-xl mb-6'>PT Dian Pandu Pratama</p></li>
          <li>PT Dian Pandu Pratama adalah perusahaan yang berdiri sejak tahun 2012 dan bergerak dalam bidang Job & Labour Supply.</li>
          <li>Manpower kami telah tersebar di berbagai daerah Kalimantan & Sumatera dengan jumlah lebih dari 1700.</li>
          <li>Komitmen kami adalah mengutamakan kepuasan para pelanggan dan memberikan pelayan yang terbaik yang didukung para teknisi yang berpengalaman serta menggunakan mesin & peralatan yang lengkap.</li>
          </ul>
      </div>
    </div>
    </main>
    </>
  )
}

export default About