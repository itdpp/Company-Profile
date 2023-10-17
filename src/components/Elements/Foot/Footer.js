import React from "react";
import "./Footer.css";
import "../../../../node_modules/font-awesome/css/font-awesome.min.css";
import Logo from "../../../assets/logo.png"

export const Footer = () => {
  return (
    <>
      {/* <div className="footer">
        <div className="footer-left">
          <h3>
            <img src="https://www.dpp.co.id/wp-content/uploads/2022/04/dpppppppp.png" />{" "}
          </h3>
          <p className="footer-links">
            <a href="#" className="link-1">
              Home
            </a>

            <a href="#">Blog</a>

            <a href="#">Pricing</a>

            <a href="#">About</a>

            <a href="#">Faq</a>

            <a href="#">Contact</a>
          </p>

        </div>

        <div className="footer-center">
          <div className="foot-tengah">
            <i className="fa fa-map-marker"></i>
            <p>
              Blok i, Jl. Jababeka XII, Harja Mekar, Kec. Cikarang Utara,
              Kabupaten Bekasi, Jawa Barat 17530
            </p>
          </div>

          <div className="foot-tengah">
            <i className="fa fa-phone"></i>
            <p>(021) 893 5016</p>
          </div>

          <div className="foot-tengah">
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:contact@dpp.co.id">contact@dpp.co.id</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>

          <div className="footer-icons">
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>
      </div> */}

      {/* ======================== */}

      <footer class="bg-slate-50 mt-20 dark:bg-gray-900">
        <div class="mx-auto w-full p-4 py-6 lg:py-8 justify-between">
          <div class="md:flex md:justify-between md:mx-3">
            <div class="mb-6 md:mb-0 md:w-[30%]">
              <a href="/landingpage" class="">
                <img
                  src={Logo}
                  class="h-8 mr-3 mb-4 w-64 h-auto"
                  alt="logo"
                />
                <p className="text-justify">
                  Lorem ipsum dolor sit amet, consectateur adispicing elit.
                  Fusce euismod convallis velit, eu auctor lacus vehicula sit
                  amet.
                </p>
                {/* <p className="font-medium">Head Office :</p>
                <p>
                  Blok i, Jl. Jababeka XII, Harja Mekar, Kec. Cikarang Utara,
                  Kabupaten Bekasi, Jawa Barat 17530
                </p>
                <p>Phone : (021) 893 5016</p>
                <p>
                  <a href="mailto:contact@dpp.co.id">
                    Email : contact@dpp.co.id
                  </a>
                </p> */}
                {/* <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
              </a>
            </div>

            {/* ============== */}

            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2 md:w-[50%] space-x-px">
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Contact Us
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <i className="fa fa-map-marker fa-lg mr-5 w-4 "></i>
                    <span className="w-full">
                      Blok i, Jl. Jababeka XII, Kec. Cikarang Utara, Kab.Bekasi,
                      Jawa Barat 17530
                    </span>
                  </li>
                  <li class="mb-4">
                    <i className="fa fa-phone fa-lg mr-5 w-4"></i>
                    <span>(021) 893 5016</span>
                  </li>
                  <li>
                    <i className="fa fa-envelope fa-lg mr-5 w-4"></i>
                    <span>
                      <a href="mailto:contact@dpp.co.id">contact@dpp.co.id</a>
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                
                <div class="flex mt-4 space-x-5 sm:mt-0 col-span-2 md:mt-4 w-full">
                  <div class="bg-slate-200 rounded-full h-8 w-8 flex justify-center items-center">
                    <a
                      href="/"
                      class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <i class="fa fa-facebook "></i>
                    </a>
                  </div>
                  <div class="bg-slate-200 rounded-full h-8 w-8 flex justify-center items-center">
                    <a
                      href="/"
                      class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <i class="fa fa-envelope "></i>
                    </a>
                  </div>
                  <div class="bg-slate-200 rounded-full h-8 w-8 flex justify-center items-center">
                    <a
                      href="/"
                      class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <i class="fa fa-twitter "></i>
                    </a>
                  </div>
                  <div class="bg-slate-200 rounded-full h-8 w-8 flex justify-center items-center">
                    <a
                      href="/"
                      class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <i class="fa fa-instagram "></i>
                    </a>
                  </div>
                  <div class="bg-slate-200 rounded-full h-8 w-8 flex justify-center items-center">
                    <a
                      href="/"
                      class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <i class="fa fa-linkedin "></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0 col-span-2 mx-auto  w-full">
                <a
                  href="#"
                  class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <i className="fa fa-facebook fa-1x"></i>
                </a>
                <a
                  href="#"
                  class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <i className="fa fa-twitter fa-1x"></i>
                </a>
                <a
                  href="#"
                  class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <i className="fa fa-linkedin fa-1x"></i>
                </a>
                <a
                  href="#"
                  class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <i className="fa fa-instagram fa-1x"></i>
                </a>
              </div> */}
            </div>
          </div>

          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="mx-auto sm:flex sm:items-center sm:justify-center">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="/" class="hover:underline">
                PT Dian Pandu Pratama
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};
