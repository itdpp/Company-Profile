import React from 'react'
import "./about.css"
import GambarAbout from "../../assets/About/gambar.jpg"


const About = () => {
  return (
    <div className='container'>
      <img className='image' src={GambarAbout} alt='Gambar'/>
      <h1 className='text'>About Us</h1>
    </div>
  )
}

export default About