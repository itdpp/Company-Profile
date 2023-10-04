import React from "react";
import "./Contact.css";

export const Contact = () => {
  return (
    <>
      <main className="contact">
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
            {/* <img src="https://products.unitedtractors.com/wp-content/uploads/2021/04/Mining-Tipper-Heavy-Hauler-Trucks.png" /> */}
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
      </main>
    </>
  );
};
