import React from 'react'
import GambarAbout from "../../assets/About/gambar.jpg"
import Herosection from '../../components/Fragments/Herosection'

const About = () => {
  const title = 'About Us'
  return (
    <>
    <main className='h-full w-full'>
    <Herosection content={title}/>
    {/* about */}
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
    <hr className='text-lg '/>
    {/* visi */}
    <div className="mx-6 my-20 md:grid md:grid-cols-2 md:gap-x-8 ">
          <div className="mb-2 xl:ml-6">
            <h2 className="mb-2 text-2xl font-semibold md:mb-6">VISION</h2>
            <p className="text-blue-800 md:w-80 lg:w-[470px] xl:w-[600px]">“Menjadi perusahaan sub-contractor terbaik di bidang jasa fabrikasi dan perakitan alat angkut pada wilayah kerja pelanggan AHEMCE Group“</p>
          </div>
          <div className="md:mr-20">
            <h2 className="mb-2 text-2xl font-semibold md:mb-6">MISSION</h2>
            <ul className="text-sm ml-6 sm:ml-8 text-blue-800 xl:ml-12">
              <li className="list-disc">Menjadi perusahaan yang bermanfaat bagi bangsa, negara dan pemangku kepentingan dengan berfokus pada kepuasan pelanggan.</li>
              <li className="list-disc">Mengembangkan dan melaksanakan sistem pengelolaan kompentensi karyawan yang up to date, berkesinambungan dan senantiasa mendukung bisnis perusahaan.</li>
            </ul>
          </div>
        </div>
        <hr/>
      {/*corporate culture  */}
      <div className="text-center my-20 mx-8 ">
          <img className="items-center sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto 2xl:mx-auto" src="https://www.dpp.co.id/wp-content/uploads/2022/04/dpppppppp.png"></img>
          <p className="font-bold text-lg">S.M.A.R.T</p>
          <h4 className="font-semibold text-sm">Satisfaction - Morale - Adaptability - Responsibility - Teamwork</h4>
        </div>
        <div className="mx-6 lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 gap-x-8 lg:mb-32 lg:mx-20 xl:mx-44">
          <div className="mb-6">
            <h2 className="font-medium text-xl">UNITY</h2>
            <p className="text-blue-800">Understanding the working mechanism, structure, and culture of the organization as well as the political, social, and economic climate in which the organization operates.</p>
          </div>
          <div className="mb-6">
            <h2 className="font-medium text-xl">RESPONSIBILITY</h2>
            <p className="text-blue-800">The ability to work effectively and efficiently to achieve goals (results) and better/ exceeding standards.</p>
          </div>
          <div>
            <h2 className="font-medium text-xl">ENTHUSIASM</h2>
            <p className="text-blue-800">The desire to help or serve others (customers) in accordance with the needs of external and internal customers.</p>
          </div>
        </div>
        <hr/>
       {/* tagline */}
       <div className="my-24 md:grid md:grid-cols-2 lg:my-36 xl:mx-12 ">
          <div className="p-6 md:p-4 ">
            <img className="xl:h-24 xl:w-[600px] " src="https://www.uniquip.co.id/wp-content/uploads/2023/01/LOGO-PROVEN-PRODUCTS-PROVEN-SERVICES.png" />
          </div>
          <div className="p-4 text-sm">
            <p className="text-blue-800 md:w-[440px] xl:w-[550px]">
              <strong>PROVEN PRODUCTS & PROVEN SERVICES</strong> is the United Equipment Indonesia’s tagline in the form of a commitment to all partners and stakeholders as a provider of equipment and services that are suitable for our
              customers’ needs, for sustainable collaboration towards success.
            </p>
          </div>
        </div>

    </main>
    </>
  )
}

export default About