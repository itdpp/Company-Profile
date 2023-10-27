import React from "react";
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
          <button class=" border border-slate-400 hover:text-white hover:bg-sky-700 p-2 text-">
            Send Message{" "}
          </button>
        </form>
      </div>

      <iframe
        className="w-full h-[40vh] sm:h-[28vh] md:h-[32vh] lg:h-[60vh] mt-14"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.8771927274815!2d107.13395415063958!3d-6.279871795141472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698530079bb95d%3A0x6e3bd034965ef020!2sPt%20Dian%20Pandu%20Pratama!5e0!3m2!1sid!2sid!4v1696404349311!5m2!1sid!2sid"
      />

      {/* <main className="contact">
        <div className="contact-background">
          <img
            alt="Contact"
            src="https://www.dpp.co.id/wp-content/uploads/2022/02/MP-Site-1024x573.png"
            className="background-image"
          ></img>
          <div className="overlay"></div>
          <div className="content">
            <h1>Contact </h1>
          </div>
        </div>
        <div className="contact-wrap">
          <div className="contact-link">
            <h1>Contact Us</h1>
            <h3>Cikarang Head Office</h3>
            <div className="contact-isi">
              <div className="isi-link">
                <i className="fa fa-map-marker"></i>
                <p>
                  Blok i, Jl. Jababeka XII, Harja Mekar, Kec. Cikarang Utara,
                  Kabupaten Bekasi, Jawa Barat 17530
                </p>
              </div>

              <div className="isi-link">
                <i className="fa fa-phone"></i>
                <p>(021) 893 5016</p>
              </div>

              <div className="isi-link">
                <i className="fa fa-envelope"></i>
                <p>
                  <a href="mailto:contact@dpp.co.id">contact@dpp.co.id</a>
                </p>
              </div>
            </div>
            </div>

          <div className="contact-text-input">
            <label for="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="text-input"
              required
            />

            <label for="email">Email</label>
            <input type="text" id="email" name="email" className="text-input" />

            <label for="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="text-input"
            />

            <label for="your-message">Your Message</label>
            <textarea
              id="your-message"
              rows={15}
              name="your-message"
              className="text-input"
            />

            <button className="button">Send Message</button>
          </div>
        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.8771927274815!2d107.13395415063958!3d-6.279871795141472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698530079bb95d%3A0x6e3bd034965ef020!2sPt%20Dian%20Pandu%20Pratama!5e0!3m2!1sid!2sid!4v1696404349311!5m2!1sid!2sid" />
      </main> */}
    </>
  );
};
