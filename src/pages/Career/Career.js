import React from "react";
import BackgroundOverlay from "../../components/Fragments/BackgroundOverlay";
import { dataCareer } from "../../data";

const Career = () => {
  const data = "Career";

 const _renderCareer = () =>{
  return(
    <>
      {dataCareer.map((career,index)=>{
        return(
        <div className="mt-20" key={index}>
        <div className="px-3 mb-10 align-top md:grid md:grid-cols-2 md:-mt-20 md:p-4 lg:px-20 lg:flex lg:flex-row lg:justify-center ">
          <div className="p-3 w-full h-full aspect-square md:p-10 lg:w-[40%] xl:w-[30%]">
            <img
              src={career.img}
              alt="product"
              className="w-full h-full aspect-square bg-cover"
            />
          </div>
          <div className="px-4 md:p-4 lg:w-[60%]">
            <p className="underline font-semibold text-3xl my-4 ">
              {career.judul}
            </p>
            <h2 className="my-4 text-base font-bold md:mt-0">Requirement :</h2>
            <ul className="list-disc ml-8">

              {career.list.map((item,index)=>{
                return(
                  <li key={index}>{item}</li>
                )
              })}
            </ul>
            <h2 className="my-4 text-base font-bold  mb-0">Kirimkan lamaran lengkap dan CV Anda ke email:</h2>
            <p>careerdpp01@gmail.com</p>
          </div>
        </div>
      </div>
        )
      })}
    </>
  )
 }

  return (
    <>
      <BackgroundOverlay content={data} />
      {_renderCareer()}
    </>
  );
};

export default Career;
