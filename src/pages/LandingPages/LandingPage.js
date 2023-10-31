import React from "react";
import { Carousel } from "flowbite-react";
import BackgroundOverlay from "../../components/Fragments/BackgroundOverlay";
import { gambarAtas } from "../../data";
import Logo from "../../assets/logo.png";
import { Button } from "flowbite-react";
import { HiOutlineArrowRight, HiShoppingCart } from "react-icons/hi";

const LandingPage = () => {
  return (
    <>
      <main className="h-full w-full ">
        <div>
          <Carousel className="h-full w-full" slideInterval={5000}>
            <BackgroundOverlay gambar={gambarAtas[0].product} />
            <BackgroundOverlay gambar={gambarAtas[0].truck} />
            <BackgroundOverlay gambar={gambarAtas[0].news} />
          </Carousel>
        </div>
        {/* <div className=" mx-auto w-52 sm:w-[300px] md:w-[360px] lg:w-[440px]">
          <img src={Logo} className="mx-auto w-full h-full" alt="gambar" />
        </div> */}
        <div className="text-center px-6 mx-auto w-auto sm:px-6 sm:w-[500px] md:w-[600px] lg:w-[80%] lg:mb-0">
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
        </div>
        {/* <div className="mx-4  md:mx-28 lg:mx-32">
          <p>
            <span className="font-bold text-md ">
              PT. United Equipment Indonesia (UNIQUIP){" "}
            </span>
            was established in 2005 and recognised as one of the leading dealers
            of heavy equipment in Indonesia offering wide range of services
            including sales, parts and technical support.
          </p>
          <p className="mt-8">
            We specialise in the supply of genuine products and after market
            support of leading premium brands such as Hyundai, Tonly, Redline by
            Dynapac, Rokbak, Zoomlion, Genie, Gehl, Pramac and Sinomach
            Changlin.
          </p>
        </div> */}

        {/* smart  */}
        <div className="text-center my-10 bg-slate-50 py-24 ">
          {/* <img className="items-center sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto 2xl:mx-auto" src={Logo}></img> */}
          <p className="font-bold text-5xl mb-5 text-red-600">S.M.A.R.T</p>
          <h4 className="font-semibold text-3xl">
            Satisfaction - Morale - Adaptability - Responsibility - Teamwork
          </h4>
        </div>

        {/* bisnis & product  */}
        <div className="text-center my-8">
          <p className="text-3xl font-bold uppercase">
            Business & Product Support
          </p>

          <div className="mx-auto w-full p-3 sm:grid sm:px-10 sm:grid-cols-1 sm:justify-center md:flex md:flex-wrap md:px-0 lg:px-0 ">
            <div
              // onClick={() => navigate("/typescania")}
              className="px-4 text-black text-left mb-4 sm:mb-12 md:w-64 lg:w-80 xl:w-96  "
            >
              <img
                src="https://www.dpp.co.id/wp-content/uploads/2023/04/Asesmen-LSP-IMABI-2.jpg"
                alt="product"
                className="w-full h-full aspect-video bg-cover hover:scale-105 transition-transform duration-300 transform "
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
                className="w-full h-full aspect-video bg-cover hover:scale-105 transition-transform duration-300 transform "
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
                className="w-full h-full aspect-video bg-cove hover:scale-105 transition-transform duration-300 transform "
              />
              <div className="">
                <div className="text-center text-lg uppercase italic font-light sm:text-lg sm:line-clamp-2 lg:line-clamp-2 lg:text-lg xl:sm:line-clamp-none">
                  Dump Truck
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full p-3 sm:grid sm:px-28 sm:grid-cols-1 sm:justify-center md:flex md:flex-wrap md:justify-center md:px-0 lg:px-0 xl:px-10 2xl:px-">
            <div className="px-4 text-black text-left mb-4 sm:mb-4 md:w-48 lg:w-56 lg:px-0 lg:mx-2 xl:w-64 ">
              <div>
                <img
                  src="https://products.unitedtractors.com/wp-content/uploads/2021/04/P_410_B8x4HZ-1.png"
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
                  src="https://products.unitedtractors.com/wp-content/uploads/2021/04/P_410_B8x4HZ-1.png"
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
                  src="https://products.unitedtractors.com/wp-content/uploads/2021/04/P_410_B8x4HZ-1.png"
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
                  src="https://products.unitedtractors.com/wp-content/uploads/2021/04/P_410_B8x4HZ-1.png"
                  alt="product"
                  className="w-full h-full aspect-square bg-cover  hover:scale-105 transition-transform duration-300 transform"
                />
              </div>

              <div className="text-center text-lg uppercase italic font-light sm:text-[16px] lg:font-normal ">
                Vessel
              </div>
            </div>
          </div>
        </div>

        {/* brand  */}
        <section class="bg-white dark:bg-gray-900">
          <div class="py-8 lg:py-10 mx-auto max-w-screen-xl px-4">
            {/* <h2 class="mb-8 lg:mb-10 text-3xl  font-bold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl lg:text-2xl">
              Our Clients
            </h2> */}
            <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-4 dark:text-gray-400 place-items-center">
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
        </section>

        {/* news  */}
        <section class="pt-20 pb-10 lg:pt-[120px] lg:pb-20 lg:px-24">
          <div class="container mx-auto">
            <div class="-mx-4 flex flex-wrap">
              <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                <div class="mx-auto mb-10 max-w-[370px]">
                  <div class="mb-8 overflow-hidden rounded">
                    <img
                      src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-01.jpg"
                      alt="image"
                      class="w-full"
                    />
                  </div>
                  <div>
                    <span class="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                      Dec 22, 2023
                    </span>
                    <h3>
                      <a
                        href="javascript:void(0)"
                        class="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                      >
                        Meet AutoManage, the best AI management tools
                      </a>
                    </h3>
                    <p class="text-body-color text-base">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                <div class="mx-auto mb-10 max-w-[370px]">
                  <div class="mb-8 overflow-hidden rounded">
                    <img
                      src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-02.jpg"
                      alt="image"
                      class="w-full"
                    />
                  </div>
                  <div>
                    <span class="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                      Mar 15, 2023
                    </span>
                    <h3>
                      <a
                        href="javascript:void(0)"
                        class="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                      >
                        How to earn more money as a wellness coach
                      </a>
                    </h3>
                    <p class="text-body-color text-base">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                <div class="mx-auto mb-10 max-w-[370px]">
                  <div class="mb-8 overflow-hidden rounded">
                    <img
                      src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-03.jpg"
                      alt="image"
                      class="w-full"
                    />
                  </div>
                  <div>
                    <span class="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                      Jan 05, 2023
                    </span>
                    <h3>
                      <a
                        href="javascript:void(0)"
                        class="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                      >
                        The no-fuss guide to upselling and cross selling
                      </a>
                    </h3>
                    <p class="text-body-color text-base">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* network  */}
        <div className="text-center mt-16 bg-slate-50 py-10">
          {/* <p className="text-3xl font-bold mb-5">OUR NETWORK</p> */}
          <div className="xl:grid xl:grid-cols-2 justify-items-center space-x-10">
              <iframe
                className="w-full h-[260px] pl-10"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.8771927274815!2d107.13395415063958!3d-6.279871795141472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698530079bb95d%3A0x6e3bd034965ef020!2sPt%20Dian%20Pandu%20Pratama!5e0!3m2!1sid!2sid!4v1696404349311!5m2!1sid!2sid"
              />
            <div className="text-left w-auto space-y-3 ">
              <p className="text-xl font-thin uppercase ">Get In touch</p>
              <p className="text-3xl font-semibold">
                Let’s contact us for more information
              </p>
              <p className="w-[80%] mb-10">
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
