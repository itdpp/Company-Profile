import React from 'react'
import { Carousel } from 'flowbite-react'

const LandingPage = () => {
  return (
   <>
   <main className='h-full w-full'>
    <div className='aspect-video w-full'>
    <Carousel className='-z-50' slideInterval={5000}>
    <div className="relative -z-50 mb-10 sm:mb-14 lg:mb-20">
        <img
          src="https://products.unitedtractors.com/wp-content/uploads/2022/03/MicrosoftTeams-image-24.jpg"
          alt="Product"
          className="object-cover w-full xl:w-full xl:h-[60vh] sm:w-full sm:h-auto" 
        />
        <div className="w-full h-full absolute bg-imgGelap top-0 left-0"></div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-4xl sm:text-[40px] md:text-5xl lg:text-[44px] font-medium text-[#fff]">
            Products
          </h1>
        </div>
      </div>
      <div className="relative -z-50 mb-10 sm:mb-14 lg:mb-20">
        <img
          src="https://products.unitedtractors.com/wp-content/uploads/2022/03/MicrosoftTeams-image-24.jpg"
          alt="Product"
          className="object-cover w-full xl:w-full xl:h-[60vh] sm:w-full sm:h-auto" 
        />
        <div className="w-full h-full absolute bg-imgGelap top-0 left-0"></div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-4xl sm:text-[40px] md:text-5xl lg:text-[44px] font-medium text-[#fff]">
            Products
          </h1>
        </div>
      </div>
    </Carousel>
    </div>
    <div className='mx-4'>
        <p><span className='font-bold text-md '>PT. United Equipment Indonesia (UNIQUIP) </span>was established in 2005 and recognised as one of the leading dealers of heavy equipment in Indonesia offering wide range of services including sales, parts and technical support.</p>
        <p className='mt-8'>We specialise in the supply of genuine products and after market support of leading premium brands such as Hyundai, Tonly, Redline by Dynapac, Rokbak, Zoomlion, Genie, Gehl, Pramac and Sinomach Changlin.</p>
    </div>
    <div className='text-center my-8'>
        <p className='text-3xl font-bold'>OUR PRODUCTS</p>
    </div>
    <div className="mx-auto w-full p-3 sm:grid sm:px-10 sm:grid-cols-1 sm:justify-center md:flex md:flex-wrap md:px-0 lg:px-0 ">
      <div
        // onClick={() => navigate("/typescania")}
        className="px-4 text-black text-left mb-4 sm:mb-12 md:w-64 lg:w-80 xl:w-96  "
      >
        <img
          src="https://www.uniquip.co.id/wp-content/uploads/2023/01/HYUNDAI-1-768x512.jpg"
          alt="product"
          className="w-full h-full aspect-video bg-cover border border-gray-300 hover:-translate-y-3 hover:duration-300"
        />
        <div className="">
          <div className="text-center text-lg uppercase italic font-light sm:text-lg sm:line-clamp-2 lg:line-clamp-2 lg:text-lg xl:sm:line-clamp-none">
            Dump Truck
          </div>
        </div>
      </div>
      <div
        // onClick={() => navigate("/typescania")}
        className="px-4 text-black text-left mb-4 sm:mb-12 md:w-64 lg:w-80 xl:w-96  "
      >
        <img
          src="https://www.uniquip.co.id/wp-content/uploads/2023/01/HYUNDAI-1-768x512.jpg"
          alt="product"
          className="w-full h-full aspect-video bg-cover border border-gray-300 hover:-translate-y-3 hover:duration-300"
        />
        <div className="">
          <div className="text-center text-lg uppercase italic font-light sm:text-lg sm:line-clamp-2 lg:line-clamp-2 lg:text-lg xl:sm:line-clamp-none">
            Dump Truck
          </div>
        </div>
      </div>
      <div
        // onClick={() => navigate("/typescania")}
        className="px-4 text-black text-left mb-4 sm:mb-12 md:w-64 lg:w-80 xl:w-96  "
      >
        <img
          src="https://www.uniquip.co.id/wp-content/uploads/2023/01/HYUNDAI-1-768x512.jpg"
          alt="product"
          className="w-full h-full aspect-video bg-cover border border-gray-300 hover:-translate-y-3 hover:duration-300"
        />
        <div className="">
          <div className="text-center text-lg uppercase italic font-light sm:text-lg sm:line-clamp-2 lg:line-clamp-2 lg:text-lg xl:sm:line-clamp-none">
            Dump Truck
          </div>
        </div>
      </div>
    </div>
    <div className='mx-10 my-16'>
        <img className='mx-auto' src='https://www.uniquip.co.id/wp-content/uploads/2023/08/Logo-Principles-1-1024x139.jpg' alt=''/>
    </div>
    <div className='text-center my-8 '>
        <p className='text-3xl  font-bold'>OUR NETWORK</p>
    </div>
    <div className=''>
    <div>
        <img src='https://www.uniquip.co.id/wp-content/uploads/2023/08/Peta-Cabang-Uniquip-1-2048x1144.jpg' alt=''/>
    </div>
    <div className=''>
        <p className='text-xl font-bold text-center'>HEAD OFFICE, BRANCHES & SERVICE POINT LOCATIONS</p>
        <p className='mx-6 animate-fade'>Headquartered in Jakarta, UNIQUIP operates a modern heavy machinery workshop, parts warehouse, sales offices and training facilities. UNIQUIP operates sales and service branches across Indonesia in different locations allowing us to be closer to our customers in all regions and different sectors.</p>
        <img className='mx-auto my-4 w-72 ' src='https://www.uniquip.co.id/wp-content/uploads/2023/09/UEI_2023_FINAL-UNIQCALL-1024x478.jpg' alt=''/>
    </div>
    </div>
   </main>
   </>
  )
}

export default LandingPage