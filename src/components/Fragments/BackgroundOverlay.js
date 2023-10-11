import React from "react";

const BackgroundOverlay = (props) => {
  return (
    <div className="relative -z-50 mb-10 sm:mb-14 lg:mb-20">
      <img
        src="https://products.unitedtractors.com/wp-content/uploads/2022/03/MicrosoftTeams-image-24.jpg"
        alt="Product"
        className="object-cover w-full xl:w-full xl:h-[60vh] sm:w-full sm:h-auto"
      />
      <div className="w-full h-full absolute bg-imgGelap top-0 left-0"></div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-4xl sm:text-[40px] md:text-5xl lg:text-[44px] font-medium text-[#fff]">
          {props.content}
        </h1>
      </div>
    </div>
  );
};

export default BackgroundOverlay;
