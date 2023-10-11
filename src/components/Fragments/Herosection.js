import React from 'react'
import GambarAbout from "../../assets/About/gambar.jpg"

const Herosection = (props) => {
  return (
    <div>
        <div className="relative -z-50 mb-10 sm:mb-14 lg:mb-20">
        <img
          src={GambarAbout}
          alt="Product"
          className="xl:w-full xl:h-[60vh] sm:w-full sm:h-96"
        />
        <div className="w-full h-full absolute bg-imgGelap top-0 left-0"></div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#fff] uppercase">
            {props.content}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Herosection