import React from 'react'
import "./about.css"
import GambarAbout from "../../assets/About/gambar.jpg"


const About = () => {
  return (
    <>
    <div className='container'>
      <img className='image' src={GambarAbout} alt='Gambar'/>
      <h1 className='text'>About Us</h1>
    </div>
    
    <div className='content'>
      <div className='image1'>
      <img src={GambarAbout}/>
      </div>
    
      <div className='text-bot'>
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