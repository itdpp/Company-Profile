import React from 'react' 
import './product.css'

export const Products = () => {
  return (
    <>

    <main className='w-full h-auto mx-auto'>
      {/* judul  */}
      <div className='hidden lg:block lg:pl-16 xl:pl-[200px]'>
        <h2 className='text-4xl font-medium p-4 lg:text-[40px] xl:py-5'>Products</h2>
      </div>
      {/*background overlay judul */}
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
      <div className='text-center px-6 mx-auto w-auto sm:px-6 sm:w-[500px] md:w-[600px] lg:w-[900px] lg:mb-13'>
        <p className='text-lg font-normal sm:text-xl lg:text-2xl'>We specialise in the supply of genuine products and after market support of leading premium brand such as Hyundai, Tonly, Redline by Dynapac, Rokbak, Zoomlion, Genie, Gehl, Pramac and Sinomach Changlin.</p>
      </div>
      <div className='mt-9 mb-16 text-center mx-auto sm:w-[460px] md:w-[540px] lg:w-[740px]'>
        <img src='https://www.uniquip.co.id/wp-content/uploads/2023/04/Logo-Principles-1024x186.jpg' className='mx-auto w-full h-full' alt='gambar' />
      </div>
    </main>

    {/* <main className='home-product'>
      <h2 className="home-judul-product">Product</h2>
      <div className="home-background">
        <img
          alt="Product"
          src="https://products.unitedtractors.com/wp-content/uploads/2022/03/MicrosoftTeams-image-24.jpg"
          className="background-image"
        ></img>
        <div className="overlay"></div>
        <div className="content">
          <h1>Product</h1>
        </div>
      </div>
      <div className="home-article-product">
        <p>
          We specialise in the supply of genuine products and after market support of leading premium brand such as Hyundai, Tonly, Redline by Dynapac, Rokbak, Zoomlion, Genie, Gehl, Pramac and Sinomach Changlin.
        </p>
      </div>
      <div className='logo-logo'>
        <img src='https://www.uniquip.co.id/wp-content/uploads/2023/04/Logo-Principles-1024x186.jpg'></img>
      </div>
    </main> */}
    </>
    
  )
}

