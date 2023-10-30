import React from "react";
import { Accordion } from "flowbite-react";
import BackgroundOverlay from "../../components/Fragments/BackgroundOverlay";
import { gambarAtas } from "../../data";

export const Contact = () => {
  const data = "Contact";
  return (
    <>
      <BackgroundOverlay content={data} gambar={gambarAtas[0].contact} />

      <div className="md:grid md:grid-cols-2 md:px-12 lg:px-20 xl:px-44 2xl:px-60">
        <div className="px-6 md:pt-10 lg:pt-10">
          <h1 className="underline text-3xl font-semibold mb-3">Contact Us</h1>
          <h2 className="uppercase font-[640]">Cikarang Head Office</h2>
          <div className="py-5">
            <div className="flex items-center py-1">
              <i className="fa fa-map-marker fa-lg mr-5 w-4 "></i>
              <span className="w-full">
                Blok i, Jl. Jababeka XII, Kec. Cikarang Utara, Kab.Bekasi, Jawa
                Barat 17530
              </span>
            </div>
            <div className="flex items-center py-1">
              <i className="fa fa-phone fa-lg mr-5 w-4"></i>
              <span>(021) 893 5016</span>
            </div>
            <div className="flex items-center py-1">
              <i className="fa fa-envelope fa-lg mr-5 w-4"></i>
              <span>
                <a href="mailto:contact@dpp.co.id">contact@dpp.co.id</a>
              </span>
            </div>
          </div>
        </div>
        <form className="px-5 py-2">
          <label class="block">
            <span class="block text-base font-semibold text-slate-700">
              Your Name
            </span>
            <input
              type="text"
              class="border px-2 border-slate-400 rounded-sm overflow-hidden w-full h-10"
            />
            <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm"></p>
          </label>
          <label class="block">
            <span class="block text-base font-semibold text-slate-700">
              Email
            </span>
            <input
              type="email"
              class="border px-2 border-slate-400 rounded-sm overflow-hidden w-full h-10"
            />
            <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm"></p>
          </label>
          <label class="block">
            <span class="block text-base font-semibold text-slate-700">
              Subject
            </span>
            <input
              type="text"
              class="border px-2 border-slate-400 rounded-sm overflow-hidden w-full h-10"
            />
            <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm"></p>
          </label>
          <label class="block">
            <span class="block text-base font-semibold text-slate-700">
              Your Message
            </span>
            <textarea
              id="message"
              name="message"
              rows="7"
              class="w-full p-2 border  border-slate-400 rounded"
            ></textarea>
            <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm"></p>
          </label>
          <button class=" bg-sky-700 text-white border border-slate-400 hover:text-white hover:bg-sky-600 p-2 ">
            Send Message{" "}
          </button>
        </form>
      </div>
      {/* <hr className="my-9" /> */}

      <div className="h-full w-full mt-10">
        <div className="">
          <p className="text-3xl text-center font-semibold bg-gray-200 text-gray-700  px-0 py-3 my-10 ">
            Contact Us For Business Needs
          </p>
        </div>
        <div class="text-gray-500 mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:px-28 xl:mt-5 gap-x-4">
          <div class="py-4 px-4 text-center space-y-2 text-lg">
            <p className="uppercase font-bold text-lg">Hafidz Fahreza P</p>
            <p>hafidz.fp@dpp.co.id</p>
            <p>082137665891</p>
            <p>Business Development & Sales Supervisor</p>
          </div>
          <div class="py-4 px-4 text-center space-y-2 text-lg ">
            <p className="uppercase font-bold text-lg">
              Mochamad Fadli Manggurangi
            </p>
            <p>mochammad.fm@dpp.co.id</p>
            <p>082123845334</p>
            <p>Procurement Supervisor</p>
          </div>
        </div>
      </div>

      {/* <hr className="my-9" /> */}
      <div className="w-full h-full  mb-24">
        <div className="">
          <p className="text-3xl text-center font-semibold bg-gray-200 text-gray-700  px-0 py-3 my-10">
            FAQ (Frequently Asked Question)
          </p>
        </div>
        <div className="px-6">
          <Accordion>
            <Accordion.Panel>
              <Accordion.Title>
                PT Dian Pandu Pratama fokus bisnisnya di bidang apa?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  <p>
                    PT Dian Pandu Pratama fokus pada dua sektor ketenagakerjaan
                    yaitu penyedia tenaga kerja (Manpower Support) serta
                    penyedia jasa fabrikasi dan perbaikan kendaraan alat berat
                    (Manufacturing Process & Fabrication Project). Di samping
                    itu kami juga mengembangkan pada manpower certification
                    serta memperluas jejaring dengan memberikan project
                    pembangunan di konstruksi alat berat.
                  </p>
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                Manpower PT Dian Pandu Pratama tersebar dimana saja?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  <p>
                    Manpower PT Dian Pandu Pratama tersebar di pulau Sumatera,
                    Jawa, NTT dan Kalimantan dengan kurang lebih 2.100 Manpower
                  </p>
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                Dimanakah Head Office PT Dian Pandu Pratama berada?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  <p>
                    Jl. Jababeka XII, Harja Mekar, Kec. Cikarang Utara,
                    Kabupaten Bekasi, Jawa Barat 17530
                  </p>
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                Bagaimana cara menghubungi PT Dian Pandu Pratama
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  <div className="py-1">
                    <div className="flex items-center py-1 gap-x-6">
                      <p>Telephone : </p>
                      <span> (021) 893 5016</span>
                    </div>
                    <div className="flex items-center py-1 gap-x-6">
                      <p>Recruitment : </p>
                      <span> indrajid.karim@dpp.co.id</span>
                    </div>
                    <div className="flex items-center py-1 gap-x-6">
                      <p>Email : </p>
                      <span> contact@dpp.co.id</span>
                    </div>
                  </div>
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      </div>

      <iframe
        className="w-full h-[40vh] sm:h-[28vh] md:h-[32vh] lg:h-[60vh] mt-14"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.8771927274815!2d107.13395415063958!3d-6.279871795141472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698530079bb95d%3A0x6e3bd034965ef020!2sPt%20Dian%20Pandu%20Pratama!5e0!3m2!1sid!2sid!4v1696404349311!5m2!1sid!2sid"
      />
    </>
  );
};
