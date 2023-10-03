import React from "react";
// import { useNavigate } from "react-router-dom";

export const DetailScania = () => {
  // const navigate = useNavigate();
  return (
    <main className="detail-product">
      <h2 className="detail-judul-product">H3200-YC</h2>
      <div className="detail-background">
        <img
          alt="Scania"
          src="https://www.scania.com/content/dam/group/about-us/heritage/corporate-milestones/2017-the-xt-range-introduced.jpg.transform/Rend_1200X630/image.jpg"
          className="background-image"
        ></img>
        <div className="overlay"></div>
        <div className="content">
          <h1>Scania Truck</h1>
        </div>
      </div>
      <div className="detail-wrap-product">
        <div className="detail-gambar">
          <img src="https://products.unitedtractors.com/wp-content/uploads/2021/04/Mining-Tipper-Heavy-Hauler-Trucks.png" />
        </div>

        <div className="detail-text">
          <h2>Scania H3200-YC</h2>
          <ul>
            <li>Operatuibg Weight 20 ton.</li>
            <li>Rated Power 348hp/2000rpm</li>
            <li>
              Komitmen kami adalah mengutamakan kepuasan para pelanggan dan
              memberikan pelayan yang terbaik yang didukung para teknisi yang
              berpengalaman serta menggunakan mesin & peralatan yang lengkap.
            </li>
          </ul>
          <table class="detail-table">
            <thead>
              <tr>
                <th className="judul-table">General</th>
              </tr>
            </thead>
            <tbody>
              <tr class="col-1">
                <td>Operaion Weight</td>
                <td>20 ton</td>
              </tr>
              <tr class="col-2">
                <td>Engine Model</td>
                <td>YC-3</td>
              </tr>
              <tr class="col-1">
                <td>Operaion Weight</td>
                <td>20 ton</td>
              </tr>
              <tr class="col-2">
                <td>Engine Model</td>
                <td>YC-3</td>
              </tr>
              <tr class="col-1">
                <td>Operaion Weight</td>
                <td>20 ton</td>
              </tr>
              <tr class="col-2">
                <td>Engine Model</td>
                <td>YC-3</td>
              </tr>
              <tr class="col-1">
                <td>Operaion Weight</td>
                <td>20 ton</td>
              </tr>
              <tr class="col-2">
                <td>Engine Model</td>
                <td>YC-3</td>
              </tr>
            </tbody>
          </table>

          <table class="detail-table">
            <thead>
              <tr>
                <th className="judul-table">General</th>
              </tr>
            </thead>
            <tbody>
              <tr class="col-1">
                <td>Operaion Weight</td>
                <td>20 ton</td>
              </tr>
              <tr class="col-2">
                <td>Engine Model</td>
                <td>YC-3</td>
              </tr>
              <tr class="col-1">
                <td>Operaion Weight</td>
                <td>20 ton</td>
              </tr>
              <tr class="col-2">
                <td>Engine Model</td>
                <td>YC-3</td>
              </tr>
              <tr class="col-1">
                <td>Operaion Weight</td>
                <td>20 ton</td>
              </tr>
              <tr class="col-2">
                <td>Engine Model</td>
                <td>YC-3</td>
              </tr>
              <tr class="col-1">
                <td>Operaion Weight</td>
                <td>20 ton</td>
              </tr>
              <tr class="col-2">
                <td>Engine Model</td>
                <td>YC-3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};
