import React from "react";
import GambarAbout from "../../assets/kocak.png";
import GroupCompany from "../../assets/About/group.png";
// import Herosection from '../../components/Fragments/Herosection'
import { gambarAtas } from "../../data";
import BackgroundOverlay from "../../components/Fragments/BackgroundOverlay";

const About = () => {
  const title = "About Us";
  return (
    <>
      <main className="h-full w-full bg-white">
        <BackgroundOverlay content={title} gambar={gambarAtas[0].about} />

        {/* <Herosection content={title}/> */}

        <div className="text-center py-10">
          {/* <p className="text-3xl font-bold mb-5">OUR NETWORK</p> */}
          <div className="xl:grid grid lg:grid-cols-2 xl:grid-cols-2 justify-items-center lg:px-[10%]">
            <div class="py-6 px-5 lg:px-0 lg:pr-6 flex items-center justify-center">
              <img
                className="lg:rounded-br-[50px]"
                src={GambarAbout}
                alt="hoe"
              />
            </div>
            <div className=" text-left w-auto ml-5 pt-5">
              <p className="text-base font-normal uppercase mb-4 md:text-center lg:text-left text-gray-500 tracking-[4px] ">
                about us
              </p>
              <p className="font-semibold text-3xl mt-1 mb-4 md:text-center lg:text-left  text-gray-700">
                PT Dian Pandu Pratama
              </p>
              {/* <p className="text-3xl font-semibold mb-4 md:text-center lg:text-left ">
                PT Dian Pandu Pratama{" "}
              </p> */}
              <p className="pr-2 mb-3">
                PT Dian Pandu Pratama adalah perusahaan yang berdiri sejak tahun
                2012 dan bergerak dalam bidang Job & Labour Supply. Manpower
                kami telah tersebar di berbagai daerah Kalimantan & Sumatera
                dengan jumlah lebih dari 2500. Komitmen kami adalah mengutamakan
                kepuasan para pelanggan dan memberikan pelayan yang terbaik yang
                didukung para teknisi yang berpengalaman serta menggunakan mesin
                & peralatan yang lengkap.
              </p>
            </div>
          </div>
        </div>

        {/* <hr className="w-[80%] mx-auto" /> */}

        {/* smart  */}
        <div className="text-center bg-white py-20 ">
          <p className="text-lg font-normal uppercase mb-3 text-gray-500 tracking-[4px]">
            Our Culture
          </p>
          <p className="font-bold text-5xl text-red-600 tracking-[10px]">S.M.A.R.T</p>

          
          <hr className="w-[30%] mt-10 mx-auto"/>
          {/* <p className="font-medium text-center text-lg mt-1 uppercase text-gray-700 tracking-[2px]">
            Satisfaction - Morale - Adaptability - Responsibility - Teamwork
          </p> */}
          <div class="bg-white py-10 sm:py-32 lg:pb-20 lg:pt-0">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
              <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                <div class="col-span-2 max-h-12 w-full object-contain lg:col-span-1 space-y-2">
                  <p className="font-medium text-center text-lg mt-1 uppercase text-gray-700 tracking-[2px]">
                    Satisfaction
                  </p>
                  <hr className="w-[22%] mx-auto border-red-600"/>
                  <p className="text-base text-gray-500">Memberikan kepuasan penuh kepada pelanggan</p>
                </div>
                <div class="col-span-2 max-h-12 w-full object-contain lg:col-span-1 space-y-2">
                  <p className="font-medium text-center text-lg mt-1 uppercase text-gray-700 tracking-[2px]">
                    Morale
                  </p>
                  <hr className="w-[22%] mx-auto border-red-600"/>
                  <p className="text-base text-gray-500">Memiliki semangat juang yang tinggi dan berintegritas</p>
                </div>
                <div class="col-span-2 max-h-12 w-full object-contain lg:col-span-1 space-y-2">
                  <p className="font-medium text-center text-lg mt-1 uppercase text-gray-700 tracking-[2px]">
                    Adaptability
                  </p>
                  <hr className="w-[22%] mx-auto border-red-600"/>
                  <p className="text-base text-gray-500">Memahami keinginan pelanggan yang bersifat fleksibel</p>
                </div>
                <div class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 space-y-2">
                  <p className="font-medium text-center text-lg mt-1 uppercase text-gray-700 tracking-[2px]">
                    Responsibility
                  </p>
                  <hr className="w-[22%] mx-auto border-red-600"/>
                  <p className="text-base text-gray-500">Bekerja dengan penuh tanggung jawab</p>
                </div>
                <div class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 space-y-2">
                  <p className="font-medium text-center text-lg mt-1 uppercase text-gray-700 tracking-[2px]">
                    Team Work
                  </p>
                  <hr className="w-[22%] mx-auto border-red-600"/>
                  <p className="text-base text-gray-500">Menjunjung tinggi nilai-nilai kerjasama</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-[80%] mx-auto" />

        {/* group company  */}

        <div className="text-center bg-white  py-10 ">
          <p className="text-lg font-normal uppercase mb-3 text-gray-500 tracking-[4px]">
            Group Company
          </p>
          <img
            className="w-[40%] mt-5 my-2 bg-white mx-auto"
            src={GroupCompany}
            alt="branch"
          />
        </div>

        {/* <hr className="w-[80%] mx-auto" /> */}

        {/* jam kerja  */}

        <div className="text-center py-10">
          {/* <p className="text-3xl font-bold mb-5">OUR NETWORK</p> */}
          <div className="xl:grid grid lg:grid-cols-2 xl:grid-cols-2 justify-items-center lg:px-[10%]">
            <div className=" text-left w-auto  pt-5 pr-6">
              <p className="text-base font-normal uppercase mb-4 md:text-center lg:text-left text-gray-500 tracking-[4px] ">
                Operational
              </p>
              <p className="text-3xl font-semibold mb-4 md:text-center lg:text-left ">
                Jam Kerja
              </p>
              <p className="pr-2 mb-3">
                PT Dian Pandu Pratama operasional Jam kerja untuk bagian Office
                bekerja pada Hari Senin sampai dengan Jumat, dimulai dari jam
                7.30 sampai dengan 16.30, kecuali di hari jumat selesai di jam
                17.00 WIB. Pada hari Sabtu dan Minggu plant operation tetap
                masuk pada hari tersebut dimuali dari jam 7.30 sampai dengan
                15.30 WIB. Untuk area site, pekerja akan mengikuti sesuai
                regulasi rooster dan jam kerja yang ada di sana.
              </p>

              {/* <div className="mt-4">
                <p className="text-3xl font-semibold mb-4 md:text-center lg:text-left ">
                  Mission{" "}
                </p>
                <div className="pr-2 mb-3">
                  <ul className="list-disc ml-6 space-y-2 pr-2">
                    <li>
                      Menjadi perusahaan yang bermanfaat bagi bangsa, negara dan
                      pemangku kepentingan dengan berfokus pada kepuasan
                      pelanggan
                    </li>
                    <li>
                      Mengembangkan dan melaksanakan sistem pengelolaan
                      kompentensi karyawan yang up to date, berkesinambungan dan
                      senantiasa mendukung bisnis perusahaan.
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
            <div class="py-6 px-5 lg:px-0 lg:pr-6 flex items-center justify-center">
              <img
                className="lg:rounded-bl-[50px] lg:rounded-tr-[50px]"
                src="https://www.dpp.co.id/wp-content/uploads/2022/04/IMG_6306-768x512.jpg"
                alt="hoe"
              />
            </div>
          </div>
        </div>

        <hr className="w-[80%] mx-auto" />

        {/* about */}
        {/* <div className="md:grid md:grid-cols-2 md:mx-8 ">
          <div className="border-slate-950 border-2 shadow-3xl w-fit mx-auto my-12 md:h-48 md:mt-3 md:ml-12 lg:h-60 lg:w-96 xl:h-80 xl:w-[550px]">
            <img
              className="object-cover w-fit h-40 sm:h-80 md:h-48 lg:w-96 lg:h-60 xl:h-80 xl:w-[550px]"
              src={GambarAbout}
              alt=""
            />
          </div>
          <div className="mx-auto mb-12 text-justify px-7 sm:px-10 ">
            <ul>
              <li>
                <p className="font-bold text-xl mb-6">PT Dian Pandu Pratama</p>
              </li>
              <li>
                PT Dian Pandu Pratama adalah perusahaan yang berdiri sejak tahun
                2012 dan bergerak dalam bidang Job & Labour Supply.
              </li>
              <li>
                Manpower kami telah tersebar di berbagai daerah Kalimantan &
                Sumatera dengan jumlah lebih dari 2500.
              </li>
              <li>
                Komitmen kami adalah mengutamakan kepuasan para pelanggan dan
                memberikan pelayan yang terbaik yang didukung para teknisi yang
                berpengalaman serta menggunakan mesin & peralatan yang lengkap.
              </li>
            </ul>
          </div>
        </div>
        <hr className="text-lg " /> */}
        {/* visi */}

        {/* <div className="mx-6 my-20 md:grid md:grid-cols-2 md:gap-x-8 lg:mx-20">
          <div className="mb-2 xl:ml-6">
            <h2 className="mb-2 text-2xl font-semibold md:mb-6">VISION</h2>
            <p className="text-blue-800 md:w-80 lg:w-[470px] xl:w-[600px]">
              “Menjadi perusahaan sub-contractor terbaik di bidang jasa
              fabrikasi dan perakitan alat angkut pada wilayah kerja pelanggan
              AHEMCE Group“
            </p>
          </div>
          <div className="md:mr-20">
            <h2 className="mb-2 text-2xl font-semibold md:mb-6">MISSION</h2>
            <ul className="text-sm ml-6 sm:ml-8 text-blue-800 xl:ml-12">
              <li className="list-disc">
                Menjadi perusahaan yang bermanfaat bagi bangsa, negara dan
                pemangku kepentingan dengan berfokus pada kepuasan pelanggan.
              </li>
              <li className="list-disc">
                Mengembangkan dan melaksanakan sistem pengelolaan kompentensi
                karyawan yang up to date, berkesinambungan dan senantiasa
                mendukung bisnis perusahaan.
              </li>
            </ul>
          </div>
        </div>
        <hr /> */}
        {/*corporate culture  */}
        {/* <div className="text-center mt-12 -mb-10">
          <p className="text-4xl font-semibold font-serif">Corporate Culture</p>
        </div>
        <div className="text-center my-20 mx-8 ">
          <img
            className="items-center sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto 2xl:mx-auto"
            src="https://www.dpp.co.id/wp-content/uploads/2022/04/dpppppppp.png"
            alt=""
          />
          <p className="font-bold text-lg">S.M.A.R.T</p>
          <h4 className="font-semibold text-sm">
            Satisfaction - Morale - Adaptability - Responsibility - Teamwork
          </h4>
        </div>
        <div className="mx-6 lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 gap-x-8 lg:mb-32 lg:mx-20 xl:mx-56">
          <div className="mb-6">
            <h2 className="font-medium text-xl">Satisfaction</h2>
            <p className="text-blue-800">
              Understanding the working mechanism, structure, and culture of the
              organization as well as the political, social, and economic
              climate in which the organization operates.
            </p>
          </div>
          <div className="mb-6">
            <h2 className="font-medium text-xl">Morale </h2>
            <p className="text-blue-800">
              The ability to work effectively and efficiently to achieve goals
              (results) and better/ exceeding standards.
            </p>
          </div>
          <div>
            <h2 className="font-medium text-xl">Adaptability</h2>
            <p className="text-blue-800">
              The desire to help or serve others (customers) in accordance with
              the needs of external and internal customers.
            </p>
          </div>
        </div>
        <div className="mx-6 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 gap-x-8 lg:mb-32 lg:mx-20 xl:mx-96">
          <div className="">
            <h2 className="font-medium text-xl">Responsibility</h2>
            <p className="text-blue-800">
              The desire to help or serve others (customers) in accordance with
              the needs of external and internal customers.
            </p>
          </div>
          <div>
            <h2 className="font-medium text-xl">Teamwork</h2>
            <p className="text-blue-800">
              The desire to help or serve others (customers) in accordance with
              the needs of external and internal customers.
            </p>
          </div>
        </div>
        <hr /> */}
        {/* tagline */}
        {/* <div className="my-24 md:grid md:grid-cols-2 lg:my-36 xl:mx-12 ">
          <div className="p-6 md:p-4 ">
            <img
              className="xl:h-24 xl:w-[600px] "
              src="https://www.uniquip.co.id/wp-content/uploads/2023/01/LOGO-PROVEN-PRODUCTS-PROVEN-SERVICES.png"
              alt=""
            />
          </div>
          <div className="p-4 text-sm">
            <p className="text-blue-800 md:w-[440px] xl:w-[550px]">
              <strong>PROVEN PRODUCTS & PROVEN SERVICES</strong> is the United
              Equipment Indonesia’s tagline in the form of a commitment to all
              partners and stakeholders as a provider of equipment and services
              that are suitable for our customers’ needs, for sustainable
              collaboration towards success.
            </p>
          </div>
        </div> */}
      </main>
    </>
  );
};

export default About;
