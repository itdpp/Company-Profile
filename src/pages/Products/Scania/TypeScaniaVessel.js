import React from 'react'
import { useNavigate } from "react-router-dom";

export const TypeScaniaVessel = () => {
  const navigate = useNavigate();
  return (
    <main className="type-product">
      <h2 className="type-judul-product">Dump Vessel</h2>
      <div className="gambar-logo">
        <img src="https://www.carlogos.org/logo/Scania-logo-6200x1800.png" />
      </div>
      <div className="type-article-product">
        <p>
          Hyundai is a well-known heavy equipment brand from South Korea. Over
          the years, Hyundai has strengthened its position as one of the leading
          heavy equipment manufacturers in the world by producing reliable and
          high-quality products. Additionally, Hyundai has a wide distribution
          network that enables customers to easily access its latest products.
          With a commitment to quality, innovation, and excellent service,
          Hyundai continues to build its reputation as a trusted brand in the
          heavy equipment industry.
        </p>
      </div>
      <div className="type-name-product">
        <h3>Dump Vessel</h3>
      </div>
      <div className="type-wrap-product">
        <div className="card-product">
          <div className="wrap-img" onClick={() => navigate("/detailscania")}>
            <img
              src="https://products.unitedtractors.com/wp-content/uploads/2021/03/CWE28064T.png"
              alt="Exca"
            />
          </div>
          <h3 className="nama-product">Dump Vessel</h3>
        </div>
        <div className="card-product">
          <div className="wrap-img" onClick={() => navigate("/detailscania")}>
            <img
              src="https://products.unitedtractors.com/wp-content/uploads/2021/03/CWE28064T.png"
              alt="Exca"
            />
          </div>
          <h3 className="nama-product">Dump Vessel</h3>
        </div>
        <div className="card-product">
          <div className="wrap-img" onClick={() => navigate("/detailscania")}>
            <img
              src="https://products.unitedtractors.com/wp-content/uploads/2021/04/P_410_B8x4HZ-1.png"
              alt="Exca"
            />
          </div>
          <h3 className="nama-product">Fuel Truck</h3>
        </div>
      </div>
    </main>
  )
}
