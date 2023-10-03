import React from "react";
import './Footer.css'
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';

export const Footer = () => {
  return (

    <div className="footer">
      <div className="footer-left">
        <h3>
          {/* Company<span>logo</span> */}
          <img src="https://www.dpp.co.id/wp-content/uploads/2022/04/dpppppppp.png" />        </h3>
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

        {/* <p className="footer-company-name">Company Name © 2015</p> */}
      </div>

      <div className="footer-center">
        <div className="foot-tengah">
          <i className="fa fa-map-marker"></i>
          <p>
          Blok i, Jl. Jababeka XII, Harja Mekar, Kec. Cikarang Utara, Kabupaten Bekasi, Jawa Barat 17530
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
    </div>
  );
};
