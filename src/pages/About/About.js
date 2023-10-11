import React from 'react'
import GambarAbout from "../../assets/About/gambar.jpg"
import Herosection from '../../components/Fragments/Herosection'

const About = () => {
  const title = 'About Us'
  return (
    <>
    <main className='h-full w-full'>
    <Herosection content={title}/>
    <div className=''>
      <div className='border-slate-950 border-2 shadow-3xl w-fit mx-auto my-12 sm: md:'>
      <img className='w-fit h-40 sm:h-80 md:h-60' src={GambarAbout}/>
      </div>
      <div className='mx-auto mb-12 text-justify px-7 sm:px-10'>
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