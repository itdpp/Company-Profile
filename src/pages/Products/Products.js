import React from 'react' 
import BackgroundOverlay from '../../components/Fragments/BackgroundOverlay'
import { gambarAtas } from '../../data'

export const Products = () => {
  return (
    <>

    <main className='w-full h-auto mx-auto'>
      {/*background overlay judul */}
        <BackgroundOverlay gambar={gambarAtas[0].product} content="Product" />
      {/* <div className="relative -z-50 mb-10 sm:mb-14 lg:mb-20">
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
      </div> */}
      <div className='text-center px-6 mx-auto w-auto sm:px-6 sm:w-[500px] md:w-[600px] lg:w-[90%] lg:mb-13'>
        <p className='text-lg font-normal sm:text-xl lg:text-2xl'>Dalam menjalankan bisnis, kami fokus pada dua sektor ketenagakerjaan yaitu penyedia tenaga kerja (Manpower Support) serta penyedia jasa fabrikasi dan perbaikan kendaraan alat berat (Manufacturing Process & Fabrication Project). Di samping itu kami juga mengembangkan pada manpower certification serta memperluas jejaring dengan memberikan project pembangunan di konstruksi alat berat.</p>
      </div>

      <hr className='mt-10 mb-6'/>
      
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-10 mx-auto max-w-screen-xl px-4">
          <h2 className="mb-8 lg:mb-16 text-3xl font-bold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
            Fabrication Support Patria
          </h2>
          <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-4 dark:text-gray-400 text-center">
            <img
              className="flex justify-center items-center mx-auto"
              src="https://www.dpp.co.id/wp-content/uploads/2022/02/Dump-Vessel-20.png"
              alt="ut"
            />
            <img
              className="flex justify-center items-center mx-auto"
              src="https://www.dpp.co.id/wp-content/uploads/2022/02/Concrete-Mixer.png"
              alt="patria"
            />
            <img
              className="flex justify-center items-center mx-auto"
              src="https://www.dpp.co.id/wp-content/uploads/2022/02/Fab-SST.jpg"
              alt="patria"
            />
            <img
              className="flex justify-center items-center mx-auto"
              src="https://www.dpp.co.id/wp-content/uploads/2022/02/Fab-Components-HD.jpg"
              alt="patria"
            />
            <img
              className="flex justify-center items-center mx-auto"
              src="https://www.dpp.co.id/wp-content/uploads/2022/02/Assy-Body-SST.jpg"
              alt="patria"
            />
            <img
              className="flex justify-center items-center mx-auto"
              src="https://www.dpp.co.id/wp-content/uploads/2022/02/ASsy-Fab-SDT-110.jpg"
              alt="patria"
            />
            <img
              className="flex justify-center items-center mx-auto"
              src="https://www.dpp.co.id/wp-content/uploads/2022/01/Dolly-50.jpg"
              alt="patria"
            />
            <img
              className="flex justify-center items-center mx-auto"
              src="https://www.dpp.co.id/wp-content/uploads/2022/02/Fab-Assy-SLT-45.jpg"
              alt="patria"
            />
          </div>
        </div>
      </section>
      <hr className='mt-10 mb-6'/>
      
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-10 mx-auto max-w-screen-xl px-4">
          <h2 className="mb-8 lg:mb-16 text-3xl font-bold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
            Clients Support
          </h2>
          <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-2 dark:text-gray-400 text-center">
            <img
              className="flex justify-center items-center mx-auto"
              src="https://karirlab-prod-bucket.s3.ap-southeast-1.amazonaws.com/files/privates/1AFbQ0GKhNMlFwXGrpvOSjpWuW6v09eDoXZkjYqr.png"
              alt="ut"
            />
            <img
              className="flex justify-center items-center mx-auto"
              src="https://www.dpp.co.id/wp-content/uploads/2022/02/PATRIA.png"
              alt="patria"
            />
          </div>
        </div>
      </section>

    </main>

    </>
    
  )
}

