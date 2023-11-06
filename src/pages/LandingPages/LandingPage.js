import React from "react";
// import BackgroundOverlay from "../../components/Fragments/BackgroundOverlay";
// import { gambarAtas } from "../../data";
// import Logo from "../../assets/logo.png";
import { Button } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";
import Carousel from "react-grid-carousel";
import GambarBackground from "../../assets/kocak.png";

const LandingPage = () => {
  // const data = ["Welcome to Dian Pandu Pratama", "Halooo", "Selamat pagi"];
  return (
    <>
      <main className="h-full w-full bg-slate-50 ">
        <div className="text-left w-auto mt-24 ml-4 lg:ml-[10%] pt-16">
          <p className="lg:text-lg font-normal uppercase mb-3 text-gray-500 tracking-[6px]">
            Welcome to
          </p>
          <p className="text-3xl lg:text-6xl font-semibold ">
            PT Dian Pandu Pratama
          </p>
          <hr className="border-black my-7" />
          <p className="lg:w-[40%] text-lg font-normal text-gray-700">
            DPP adalah perusahaan yang bergerak dalam bidang Job & Labour Supply
            serta fabrication project.
          </p>
        </div>

        {/* GAMBAR  */}

        <div class="relative overflow-hidden">
          <img
            src={GambarBackground}
            alt="qwe"
            class="w-full h-auto"
          />
          {/* <p class="absolute inset-0 flex items-center justify-center">Your text or content here</p> */}
        </div>

        {/* ===== KET DPP & MP =====  */}
        <div className="text-center bg-slate-50 py-10">
          {/* <p className="text-3xl font-bold mb-5">OUR NETWORK</p> */}
          <div className="lg:grid lg:grid-cols-2 justify-items-center">
            <div className="text-left w-auto  ml-5 lg:ml-[20%] lg:pt-5">
              <p className="text-base font-normal uppercase mb-2 text-gray-500 tracking-[4px]">
                Why us
              </p>
              <p className="text-3xl font-semibold lg:w-[60%] mb-4">
                Dian Pandu Pratama as Job Supply and Labour Supply
              </p>
              <p className="text-justify mr-5 lg:w-[80%] mb-3">
                We welcome inquiries on any matter and will endeavor to provide
                as much assistance as we can. Please use the form here to send
                us your inquiry, or feel free to contact us directly with the
                details below
              </p>

              <Button className="">
                <p>Tentang Kami</p>
                <HiOutlineArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <div className="mt-7">
                <p className="text-base font-normal uppercase mb-3 text-gray-500 tracking-[4px]">
                  Total Manpower
                </p>
                <div className="grid grid-cols-3 mb-4 lg:grid-cols-3 pr-10">
                  <div className="space-y-1">
                    <p className="font-bold text-2xl text-gray-600">2106</p>
                    <p className="font-normal text-lg text-gray-700">
                      Fabricator
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-bold text-2xl text-gray-600">111</p>
                    <p className="font-normal text-lg text-gray-700">Leader</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-bold text-2xl text-gray-600">200</p>
                    <p className="font-normal text-lg text-gray-700">
                      Administrator
                    </p>
                  </div>
                </div>
              </div>
              {/* <img
              className="mx-auto my-4 w-72 xl:ml-16"
              src="https://www.uniquip.co.id/wp-content/uploads/2023/09/UEI_2023_FINAL-UNIQCALL-1024x478.jpg"
              alt=""
            /> */}
            </div>
            <img
              className="text-center mx-auto"
              src="https://www.kppmining.com/assets/images/why-us.png"
              alt="hoe"
            />
          </div>
        </div>

        {/* carousel atas  */}
        {/* <div>
          <Carousel className="h-full w-full" slideInterval={5000}>
            <BackgroundOverlay
              gambar={gambarAtas[0].product}
              content={data[0]}
            />
            <BackgroundOverlay gambar={gambarAtas[0].truck} content={data[1]} />
            <BackgroundOverlay gambar={gambarAtas[0].news} content={data[2]} />
          </Carousel>
        </div> */}

        {/* description  */}
        {/* <div className="text-center px-6 mx-auto w-auto sm:px-6 sm:w-[500px] md:w-[600px] lg:w-[80%] lg:mb-0">
          <p className="text-lg font-normal sm:text-xl lg:text-2xl">
            PT Dian Pandu Pratama adalah perusahaan Job & Labour Supply dengan
            lebih dari 1700 Manpower di Kalimantan & Sumatera. Kami berkomitmen
            pada kepuasan pelanggan, didukung oleh teknisi berpengalaman dan
            peralatan lengkap. Fokus bisnis kami adalah pada penyediaan tenaga
            kerja (Manpower Support) dan layanan fabrikasi serta perbaikan
            kendaraan alat berat (Manufacturing Process & Fabrication Project).
            Kami juga mengembangkan sertifikasi tenaga kerja dan memperluas
            jejaring dengan proyek konstruksi alat berat.
          </p>
        </div> */}

        {/* VISI MISI  */}
        <div className="text-center bg-slate-50 py-10">
          {/* <p className="text-3xl font-bold mb-5">OUR NETWORK</p> */}
          <div className="xl:grid grid lg:grid-cols-2 xl:grid-cols-2 justify-items-center lg:px-[10%]">
            <div class="py-6 px-5 lg:px-0 lg:pr-6 flex items-center justify-center">
              <img
                className="lg:rounded-e-[50px] rounded"
                src="https://www.dpp.co.id/wp-content/uploads/2022/04/IMG_6306-768x512.jpg"
                alt="hoe"
              />
            </div>
            <div className=" text-left w-auto ml-5 pt-5">
              <p className="text-base font-normal uppercase mb-4 md:text-center lg:text-left text-gray-500 tracking-[4px] ">
                Vision & Mission
              </p>
              <p className="text-3xl font-semibold mb-4 md:text-center lg:text-left ">
                Vision{" "}
              </p>
              <p className="pr-2 mb-3">
                “Menjadi perusahaan sub-contractor terbaik di bidang jasa
                fabrikasi dan perakitan alat angkut pada wilayah kerja pelanggan
                AHEMCE Group“
              </p>

              <div className="mt-4">
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
              </div>
            </div>
          </div>
        </div>

        {/* bisnis & product ====================  */}
        <div className="text-center pt-16 lg:pb-10 bg-white">
          {/* <p className="text-3xl my-4 font-bold uppercase">Our Business</p> */}
          <p className="text-lg font-normal uppercase mb-3 text-gray-500 tracking-[4px]">
            Our Business
          </p>

          <div className="mx-auto w-full p-3 sm:grid sm:px-10 sm:grid-cols-1 sm:justify-center md:flex md:flex-wrap md:px-0 lg:px-0 ">
            <div
              // onClick={() => navigate("/typescania")}
              className="px-4 text-black text-left mb-4 sm:mb-12 md:w-64 lg:w-80 xl:w-96  "
            >
              <img
                src="https://www.dpp.co.id/wp-content/uploads/2023/04/Asesmen-LSP-IMABI-2.jpg"
                alt="product"
                className="w-full h-full aspect-video rounded-xl bg-cover hover:scale-105 transition-transform duration-300 transform "
              />
              <div className="">
                <p className="font-normal text-center text-lg mt-1 uppercase text-gray-700">
                  Manufacturing process
                </p>
              </div>
            </div>
            <div
              // onClick={() => navigate("/typescania")}
              className="px-4 text-black text-left mb-4 sm:mb-12 md:w-64 lg:w-80 xl:w-96  "
            >
              <img
                src="https://www.dpp.co.id/wp-content/uploads/2022/02/Hnet.com-image-6-1024x682.jpg"
                alt="product"
                className="w-full h-full aspect-video bg-cover rounded-xl hover:scale-105 transition-transform duration-300 transform "
              />
              <div className="">
                <p className="font-normal text-center text-lg mt-1 uppercase text-gray-700">
                  Welder Certification
                </p>
              </div>
            </div>
            <div
              // onClick={() => navigate("/typescania")}
              className="px-4 text-black text-left mb-4 sm:mb-12 md:w-64 lg:w-80 xl:w-96  "
            >
              <img
                src="https://www.dpp.co.id/wp-content/uploads/2023/04/Tongkang-Project.jpg"
                alt="product"
                className="w-full h-full aspect-video bg-cover rounded-xl hover:scale-105 transition-transform duration-300 transform "
              />
              <div className="">
                <p className="font-normal text-center text-lg mt-1 uppercase text-gray-700">
                  Fabrication Project
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="w-[80%] mx-auto" />

        {/* fabrication  */}
        <div className=" text-center py-10  bg-white px-[10%] spacey-5">
          <p className="text-lg font-normal uppercase mb-10 text-gray-500 tracking-[4px]">
            Product Fabrication
          </p>
          <Carousel cols={5} rows={1} gap={20} autoplay={6000} loop>
            <Carousel.Item>
              <img
                src="https://www.patria.co.id/images/product/large/Dump%20Vessel%20edit.png"
                alt="product"
                className="w-full h-full aspect-square bg-cover  hover:scale-105 transition-transform duration-300 transform"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://www.patria.co.id/images/product/large/SSTFull.png "
                alt="product"
                className="w-full h-full aspect-square bg-cover  hover:scale-105 transition-transform duration-300 transform"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://www.patria.co.id/images/product/large/cmred.png"
                alt="product"
                className="w-full h-full aspect-square bg-cover  hover:scale-105 transition-transform duration-300 transform"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://www.patria.co.id/images/product/large/10%20man%20hauler%20PNG%20-%20Copy.png"
                alt="product"
                className="w-full h-full aspect-square bg-cover  hover:scale-105 transition-transform duration-300 transform"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://www.patria.co.id/images/product/large/Dump%20Vessel%20edit.png"
                alt="product"
                className="w-full h-full aspect-square bg-cover  hover:scale-105 transition-transform duration-300 transform"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://www.patria.co.id/images/product/large/SSTFull.png "
                alt="product"
                className="w-full h-full aspect-square bg-cover  hover:scale-105 transition-transform duration-300 transform"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://www.patria.co.id/images/product/large/cmred.png"
                alt="product"
                className="w-full h-full aspect-square bg-cover  hover:scale-105 transition-transform duration-300 transform"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://www.patria.co.id/images/product/large/10%20man%20hauler%20PNG%20-%20Copy.png"
                alt="product"
                className="w-full h-full aspect-square bg-cover  hover:scale-105 transition-transform duration-300 transform"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://www.patria.co.id/images/product/large/Dump%20Vessel%20edit.png"
                alt="product"
                className="w-full h-full aspect-square bg-cover  hover:scale-105 transition-transform duration-300 transform"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://www.patria.co.id/images/product/large/SSTFull.png "
                alt="product"
                className="w-full h-full aspect-square bg-cover  hover:scale-105 transition-transform duration-300 transform"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://www.patria.co.id/images/product/large/cmred.png"
                alt="product"
                className="w-full h-full aspect-square bg-cover  hover:scale-105 transition-transform duration-300 transform"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://www.patria.co.id/images/product/large/10%20man%20hauler%20PNG%20-%20Copy.png"
                alt="product"
                className="w-full h-full aspect-square bg-cover  hover:scale-105 transition-transform duration-300 transform"
              />
            </Carousel.Item>
            {/* ... */}
          </Carousel>
          {/*           
          <div className="mx-auto w-full p-3 sm:grid sm:px-28 sm:grid-cols-1 sm:justify-center md:flex md:flex-wrap md:justify-center md:px-0 lg:px-0 xl:px-10 2xl:px-">
            <div className="px-4 text-black text-left mb-4 sm:mb-4 md:w-48 lg:w-56 lg:px-0 lg:mx-2 xl:w-64 ">
              <div>
                <img
                  src="https://www.patria.co.id/images/product/large/Dump%20Vessel%20edit.png"
                  alt="product"
                  className="w-full h-full aspect-square bg-cover  hover:scale-105 transition-transform duration-300 transform"
                />
              </div>

              <div className="text-center text-lg uppercase italic font-light sm:text-[16px] lg:font-normal ">
                Vessel
              </div>
            </div>
            <div className="px-4 text-black text-left mb-4 sm:mb-4 md:w-48 lg:w-56 lg:px-0 lg:mx-2 xl:w-64 ">
              <div>
                <img
                  src="https://www.patria.co.id/images/product/large/SSTFull.png "
                  alt="product"
                  className="w-full h-full aspect-square bg-cover  hover:scale-105 transition-transform duration-300 transform"
                />
              </div>

              <div className="text-center text-lg uppercase italic font-light sm:text-[16px] lg:font-normal ">
                Vessel
              </div>
            </div>
            <div className="px-4 text-black text-left mb-4 sm:mb-4 md:w-48 lg:w-56 lg:px-0 lg:mx-2 xl:w-64 ">
              <div>
                <img
                  src="https://www.patria.co.id/images/product/large/cmred.png"
                  alt="product"
                  className="w-full h-full aspect-square bg-cover  hover:scale-105 transition-transform duration-300 transform"
                />
              </div>

              <div className="text-center text-lg uppercase italic font-light sm:text-[16px] lg:font-normal ">
                Vessel
              </div>
            </div>
            <div className="px-4 text-black text-left mb-4 sm:mb-4 md:w-48 lg:w-56 lg:px-0 lg:mx-2 xl:w-64 ">
              <div>
                <img
                  src="https://www.patria.co.id/images/product/large/10%20man%20hauler%20PNG%20-%20Copy.png"
                  alt="product"
                  className="w-full h-full aspect-square bg-cover  hover:scale-105 transition-transform duration-300 transform"
                />
              </div>

              <div className="text-center text-lg uppercase italic font-light sm:text-[16px] lg:font-normal ">
                Vessel
              </div>
            </div>
          </div> */}
        </div>

        <hr className="w-[80%] mx-auto" />

        {/* client new  */}
        {/* <div className="text-center bg-white py-10">
          <div className=" xl:flex justify-items-center">
            <div className="text-left w-[40%] pt-5 lg:pl-[10%]">
              <p className="text-xl font-bold mb-2  tracking-[2px]">
                Our Clients
              </p>
              <p className="w-[80%] text-lg font normal text-gray-500 mb-3">
                Some of our best partners who have worked for 3+ years
              </p>
            </div>

            <div className=" mt-10 w-[60%] place-items-center">
              <Carousel
                cols={4}
                rows={1}
                gap={10}
                // hideArrow
                autoplay={3000}
                loop
                width={200}
              >
                <Carousel.Item>
                  <img
                    src="https://karirlab-prod-bucket.s3.ap-southeast-1.amazonaws.com/files/privates/1AFbQ0GKhNMlFwXGrpvOSjpWuW6v09eDoXZkjYqr.png"
                    alt="ut"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    width="100%"
                    src="https://www.dpp.co.id/wp-content/uploads/2022/02/PATRIA.png"
                    alt="patria"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    width="100%"
                    src="https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/1f1c9a8e7ba44a2adeef5970999a8b00.png"
                    alt="triatra"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src="https://karirlab-prod-bucket.s3.ap-southeast-1.amazonaws.com/files/privates/1AFbQ0GKhNMlFwXGrpvOSjpWuW6v09eDoXZkjYqr.png"
                    alt="ut"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    width="100%"
                    src="https://www.dpp.co.id/wp-content/uploads/2022/02/PATRIA.png"
                    alt="patria"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    width="100%"
                    src="https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/1f1c9a8e7ba44a2adeef5970999a8b00.png"
                    alt="triatra"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div> */}

        {/* client new 2  */}
        <div class="bg-white py-10 sm:py-32 lg:pb-20 lg:pt-10">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="text-lg font-normal uppercase mb-10 text-center text-gray-500 tracking-[4px]">
              Our Clients
            </p>
            <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <img
                class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://karirlab-prod-bucket.s3.ap-southeast-1.amazonaws.com/files/privates/1AFbQ0GKhNMlFwXGrpvOSjpWuW6v09eDoXZkjYqr.png"
                alt="ut"
                width="158"
                height="48"
              />
              <img
                class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://www.dpp.co.id/wp-content/uploads/2022/02/PATRIA.png"
                alt="patria"
                width="158"
                height="48"
              />
              <img
                class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/1f1c9a8e7ba44a2adeef5970999a8b00.png"
                alt="triatra"
                width="158"
                height="48"
              />
              <img
                class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                src="https://www.dpp.co.id/wp-content/uploads/2022/02/PMP-300x77.png"
                alt="pmp"
                width="158"
                height="48"
              />
              <img
                class="col-span-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                src="https://www.dpp.co.id/wp-content/uploads/2022/02/PPLI-300x77.png"
                alt="ppli"
                width="158"
                height="48"
              />
              <img
                class="col-span-2 lg:col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                src="https://www.dpp.co.id/wp-content/uploads/2022/02/PML.png"
                alt="Statamic"
                width="158"
                height="48"
              />
              <img
                class="col-span-2 lg:col-start-3 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                src="https://www.dpp.co.id/wp-content/uploads/2022/03/cropped-Logo-pami-Terbaru-1-300x77.png"
                alt="Statamic"
                width="158"
                height="48"
              />
              <img
                class="col-span-2 lg:col-start-4 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                src="http://202.159.35.85/cdn/d:300/company/logo/20211003/6e8d59e8f3cacefacc4374675fb24b4b0b75618b1633230458.jpg"
                alt="Statamic"
                width="158"
                height="48"
              />
            </div>
          </div>
        </div>

        {/* company group  */}
        {/* <div className="bg-slate-50 text-center w-full h-full lg:mt-2">
          <h2 class="mb-8 lg:mb-16 text-3xl font-bold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
            Groub Company
          </h2>
          <img
            className="w-[40%] mt-5 my-10 mx-auto"
            src="https://www.dpp.co.id/wp-content/uploads/2022/02/Our-Business-768x511.png"
            alt="branch"
          />
        </div> */}

        {/* smart  */}
        {/* <div className="text-center my-1 bg-slate-50 py-24 ">
        <p className="text-lg font-normal uppercase mb-3 text-gray-500 tracking-[4px]">
            Our Culture
          </p>
          <p className="font-bold text-5xl mb-5 text-red-600">S.M.A.R.T</p>
          <h4 className="font-semibold text-3xl">
            Satisfaction - Morale - Adaptability - Responsibility - Teamwork
          </h4>
        </div> */}

        {/* brand  */}
        {/* <section class="bg-white">
          <div class="py-8 lg:py-10 mx-auto max-w-screen-xl px-4 text-center">
            <p className="text-lg font-normal uppercase mb-10 text-gray-500 tracking-[4px]">
              Our Clients
            </p>
            <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-5 dark:text-gray-400 place-items-center">
              <img
                className="flex justify-center items-center  place-self-center"
                src="https://karirlab-prod-bucket.s3.ap-southeast-1.amazonaws.com/files/privates/1AFbQ0GKhNMlFwXGrpvOSjpWuW6v09eDoXZkjYqr.png"
                alt="ut"
              />
              <img
                className="flex justify-center items-center  place-self-center"
                src="https://www.dpp.co.id/wp-content/uploads/2022/02/PATRIA.png"
                alt="patria"
              />
              <img
                className="flex justify-center items-center   place-self-center"
                src="https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/1f1c9a8e7ba44a2adeef5970999a8b00.png"
                alt="triatra"
              />
              <img
                className="flex justify-center items-center  place-self-center"
                src="https://www.dpp.co.id/wp-content/uploads/2022/02/PMP-300x77.png"
                alt="patria"
              />
              <img
                className="flex justify-center items-center  place-self-center"
                src="https://www.dpp.co.id/wp-content/uploads/2022/02/PPLI-300x77.png"
                alt="patria"
              />
              <img
                className="flex justify-center items-center place-self-center "
                src="https://www.dpp.co.id/wp-content/uploads/2022/03/cropped-Logo-pami-Terbaru-1-300x77.png"
                alt="patria"
              />
              <img
                className="flex justify-center items-center  place-self-center"
                src="https://www.dpp.co.id/wp-content/uploads/2022/02/PML.png"
                alt="patria"
              />
              <img
                className="flex justify-center items-center w-52 "
                src="http://202.159.35.85/cdn/d:300/company/logo/20211003/6e8d59e8f3cacefacc4374675fb24b4b0b75618b1633230458.jpg"
                alt="patria"
              />
            </div>
          </div>
        </section> */}

        <hr className="w-[80%] mx-auto" />

        {/* news  */}
        <section class="bg-white pt-10 pb-10 lg:pt-[60px] lg:pb-20 lg:px-24">
          <div class="container mx-auto ">
            <p className="text-lg font-normal text-center uppercase mb-10 text-gray-500 tracking-[4px]">
              News Highlight
            </p>
            <div class="-mx-4 flex flex-wrap">
              <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                <div class="mx-auto mb-10 max-w-[370px]">
                  <div class="mb-5 overflow-hidden rounded">
                    <img
                      src="https://www.dpp.co.id/wp-content/uploads/2023/10/Okupasi-Welder-Adaro.jpg"
                      alt="imag"
                      class="w-full h-52"
                    />
                  </div>
                  <div>
                    <span class=" mb-3 text-gray-600 inline-block rounded py-1 text-center text-sm font-extralight">
                      23 Oktober 2023
                    </span>
                    <h3>
                      <a
                        href="/"
                        class="text-dark hover:text-primary mb-3 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-[22px]"
                      >
                        Sertifikasi BNSP Okupasi Welder
                      </a>
                    </h3>
                    <p class="text-body-color text-base mb-2 line-clamp-2">
                      Juni 2023 – Mengingat pertumbuhan karyawan yang semakin
                      meningkat dan demand terkait welder di area
                    </p>
                    <Button className="-ml-4" color="#fff">
                      <p className="font-semibold text-base">Selengkapnya</p>
                      <HiOutlineArrowRight className="ml-2 h-5 w-4 mt-1" />
                    </Button>
                  </div>
                </div>
              </div>
              <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                <div class="mx-auto mb-10 max-w-[370px]">
                  <div class="mb-5 overflow-hidden rounded">
                    <img
                      src="https://www.dpp.co.id/wp-content/uploads/2023/10/Visit-Site-Sangatta.jpg"
                      alt="imag"
                      class="w-full h-52"
                    />
                  </div>
                  <div>
                    <span class=" mb-3 text-gray-600 inline-block rounded py-1 text-center text-sm font-extralight">
                      18 Oktober 2023
                    </span>
                    <h3>
                      <a
                        href="/"
                        class="text-dark hover:text-primary mb-3 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-[22px]"
                      >
                        Sambung Rasa Karyawan PT Dian Pandu Pratama 2023
                      </a>
                    </h3>
                    <p class="text-body-color text-base mb-2 line-clamp-2">
                      August – September 2023 – In creating a close relationship
                      between employees and the company, PT Dian Pandu Pratama
                      always carries out “Sambung Rasa” activities for employees
                      in customers’ areas in the Kalimantan area. The management
                      journey began in August 2023 to Sangatta, East Kalimantan,
                      where the largest number of manpower is distributed. The
                      trip also continued to several areas such as Balikpapan,
                      Tabang, Melak and Berau. With communication, employees’
                      involvement would feel getting attention to a feeling of
                      remaining in the PT Dian Pandu Pratama organization and
                      continuing to participate in the organization, creating
                      employee’s a commitment which is called normative
                      commitment. With a normative commitment, employee’s
                      endless fidelity to the company is rising and the employee
                      remain and continue their career path at PT Dian Pandu
                      Pratama.
                    </p>
                    <Button className="-ml-4" color="#fff">
                      <p className="font-semibold text-base">Selengkapnya</p>
                      <HiOutlineArrowRight className="ml-2 h-5 w-4 mt-1" />
                    </Button>
                  </div>
                </div>
              </div>
              <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                <div class="mx-auto mb-10 max-w-[370px]">
                  <div class="mb-5 overflow-hidden rounded">
                    <img
                      src="https://www.dpp.co.id/wp-content/uploads/2022/08/IMG_4544.jpg"
                      alt="imag"
                      class="w-full h-52"
                    />
                  </div>
                  <div>
                    <span class=" mb-3 text-gray-600 inline-block rounded py-1 text-center text-sm font-extralight">
                      18 Juli 2022
                    </span>
                    <h3>
                      <a
                        href="/"
                        class="text-dark hover:text-primary mb-3 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-[22px]"
                      >
                        HUT ke 10 tahun PT Dian Pandu Pratama
                      </a>
                    </h3>
                    <p class="text-body-color text-base mb-2 line-clamp-2">
                      Cikarang, 18 Juli 2022, Karyawan PT Dian Pandu Pratama
                      bersama dengan
                    </p>
                    <Button className="-ml-4" color="#fff">
                      <p className="font-semibold text-base">Selengkapnya</p>
                      <HiOutlineArrowRight className="ml-2 h-5 w-4 mt-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* network  */}
        <div className="text-center mt-9 bg-slate-50 py-10 border-b">
          {/* <p className="text-3xl font-bold mb-5">OUR NETWORK</p> */}
          <div className="xl:grid xl:grid-cols-2 justify-items-center space-x-4 lg:space-x-10">
            <iframe
              title="maps"
              className="w-full h-[260px] lg:h-[300px] xl:pl-10"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.8771927274815!2d107.13395415063958!3d-6.279871795141472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698530079bb95d%3A0x6e3bd034965ef020!2sPt%20Dian%20Pandu%20Pratama!5e0!3m2!1sid!2sid!4v1696404349311!5m2!1sid!2sid"
            />
            <div className="text-left w-auto space-y-3 py-5 pl-0">
              {/* <p className="text-xl font-thin uppercase">Get In touch</p> */}
              <p className="text-lg font-normal uppercase  text-gray-500 lg:tracking-[4px]">
                Get In tOUCH
              </p>
              <p className=" text-2xl lg:text-3xl font-semibold">
                Let’s contact us for more information
              </p>
              <p className="pr-5 lg:w-[80%] mb-10">
                We welcome inquiries on any matter and will endeavor to provide
                as much assistance as we can. Please use the form here to send
                us your inquiry, or feel free to contact us directly with the
                details below
              </p>
              <Button>
                <p>Contact Us</p>
                <HiOutlineArrowRight className="ml-2 h-5 w-5" />
              </Button>
              {/* <img
              className="mx-auto my-4 w-72 xl:ml-16"
              src="https://www.uniquip.co.id/wp-content/uploads/2023/09/UEI_2023_FINAL-UNIQCALL-1024x478.jpg"
              alt=""
            /> */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LandingPage;
