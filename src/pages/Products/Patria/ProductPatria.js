import React from "react";

import { useNavigate } from "react-router-dom";

export const ProductPatria = () => {
  const navigate = useNavigate();
  return (
    <main className="type-product">
      <h2 className="type-judul-product">Patria</h2>
      <div className="gambar-logo">
        <img src="https://www.patria.co.id/images/patria.png" />
      </div>
      <div className="type-article-product">
        <p>
          PT United Tractors Pandu Engineering through its brand, PATRiA was
          established in February 8, 1983. It was initially built to meet the
          increasing demand of industries development in Indonesia. As one of
          Indonesia's leading company in heavy equipment manufacturing &
          engineering, PATRiA provides solutions based on customer's specific
          needs.
        </p>
      </div>
      <div className="detail-wrap-product">
        <div className="detail-gambar">
          <img src="https://www.patria.co.id/images/product/large/xpro-vessel_.png" />
        </div>

        <div className="detail-text">
          <h2>Xpro Vessel</h2>
          <p>Komitmen kami adalah mengutamakan kepuasan para pelanggan dan
              memberikan pelayan yang terbaik yang didukung para teknisi yang
              berpengalaman serta menggunakan mesin & peralatan yang lengkap.</p>
          <ul>
            <li>Operatuibg Weight 20 ton.</li>
            <li>Rated Power 348hp/2000rpm</li>
            <li>Rated Power 348hp/2000rpm</li>
            <li>Rated Power 348hp/2000rpm</li>
            <li>Rated Power 348hp/2000rpm</li>
            <li>Rated Power 348hp/2000rpm</li>
            <li>Rated Power 348hp/2000rpm</li>
          </ul>
        </div>
      </div>
      <div className="detail-wrap-product">
        <div className="detail-gambar">
          <img src="https://image1ws.indotrading.com/s3/productimages/webp/co35426/p783645/w600-h600/60079838-037b-431a-85d8-ed3c4671e8c0.png" />
        </div>

        <div className="detail-text">
          <h2>Forklift</h2>
          <p>Komitmen kami adalah mengutamakan kepuasan para pelanggan dan
              memberikan pelayan yang terbaik yang didukung para teknisi yang
              berpengalaman serta menggunakan mesin & peralatan yang lengkap.</p>
          <ul>
            <li>Operatuibg Weight 20 ton.</li>
            <li>Rated Power 348hp/2000rpm</li>
            <li>Rated Power 348hp/2000rpm</li>
          </ul>
        </div>
      </div>
    </main>
  );
};
