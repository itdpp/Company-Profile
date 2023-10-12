import React from "react";
import TitleTop from "../../../components/Fragments/TitleTop";
import BackgroundOverlay from "../../../components/Fragments/BackgroundOverlay";
// import { useNavigate } from "react-router-dom";

export const DetailScania = () => {
  // const navigate = useNavigate();
  const judul = "H32-5WR";
  return (
    <>
      <TitleTop content={judul} />
      <BackgroundOverlay content={judul} />

      <div className="grid grid-cols-1 md:grid-cols-2  md:-space-x-0 lg:-space-x-5 xl:-space-x-18">
        <div className="px-12 pt-16 mx-auto grid gap-y-5 md:w-[370px] md:h-[370px] md:px-0 md:p-0 md:block lg:w-[480px] lg:h-[480px] lg:p-3 xl:px-0  ">
          <img
            src="https://products.unitedtractors.com/wp-content/uploads/2021/04/P_410_B8x4HZ-1.png"
            alt="product"
            className="w-full h-full aspect-square bg-cover border border-gray-300 "
          />
        </div>
        <div className="p-4 md:py-0 md:w-auto md:h-auto lg:pr-1 xl:p-0 xl:pr-36 2xl:pr-52">
          <h2 className="my-4 text-3xl font-semibold md:mt-0">{judul}</h2>
          <ul className="list-disc ml-8 text-blue-900">
            <li>Opertarion Weight 70 ton</li>
            <li>Opertarion Weight 70 ton</li>
            <li>Opertarion Weight 70 ton</li>
          </ul>
          <div class="flex flex-col text-blue-900">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <h2 className="text-base font-semibold py-3">GENERAL</h2>
                  <table class="min-w-full text-left text-sm font-light">
                    <tbody>
                      <tr class="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                        <td class="whitespace-nowrap px-6 py-4 font-bold">
                          Operation Weight
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 font-normal">
                          70 ton
                        </td>
                      </tr>
                      <tr class="border-b bg-white dark:border-neutral-500 dark:bg-neutral-700">
                        <td class="whitespace-nowrap px-6 py-4 font-bold">
                          Size
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 font-normal">
                          -
                        </td>
                      </tr>
                      <tr class="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                        <td class="whitespace-nowrap px-6 py-4 font-bold">
                          Emission
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 font-normal">
                          Tier 2
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <h2 className="text-base font-semibold py-3">ENGINE</h2>
                  <table class="min-w-full text-left text-sm font-light">
                    <tbody>
                      <tr class="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                        <td class="whitespace-nowrap px-6 py-4 font-bold">
                          Operation Weight
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 font-normal">
                          70 ton
                        </td>
                      </tr>
                      <tr class="border-b bg-white dark:border-neutral-500 dark:bg-neutral-700">
                        <td class="whitespace-nowrap px-6 py-4 font-bold">
                          Size
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 font-normal">
                          -
                        </td>
                      </tr>
                      <tr class="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                        <td class="whitespace-nowrap px-6 py-4 font-bold">
                          Emission
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 font-normal">
                          Tier 2
                        </td>
                      </tr>
                      <tr class="border-b bg-white dark:border-neutral-500 dark:bg-neutral-700">
                        <td class="whitespace-nowrap px-6 py-4 font-bold">
                          Size
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 font-normal">
                          -
                        </td>
                      </tr>
                      <tr class="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                        <td class="whitespace-nowrap px-6 py-4 font-bold">
                          Emission
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 font-normal">
                          Tier 2
                        </td>
                      </tr>
                      <tr class="border-b bg-white dark:border-neutral-500 dark:bg-neutral-700">
                        <td class="whitespace-nowrap px-6 py-4 font-bold">
                          Size
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 font-normal">
                          -
                        </td>
                      </tr>
                      <tr class="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                        <td class="whitespace-nowrap px-6 py-4 font-bold">
                          Emission
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 font-normal">
                          Tier 2
                        </td>
                      </tr>
                    </tbody>
                  </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 px-3 md:flex md:flex-start">
        <div className="w-full h-full mx-auto sm:w-[460px] md:w-[400px] md:px-10 md:-mx-10 lg:px-0 lg:m-10 lg:w-[300px] ">
          <img
            src="https://products.unitedtractors.com/wp-content/uploads/2021/04/P_410_B8x4HZ-1.png"
            alt="product"
            className="w-full h-full aspect-square bg-cover border border-gray-300 hover:-translate-y-3 hover:duration-300"
          />
        </div>
        <div className="w-full h-full mx-auto md:w-[400px] md:px-3 lg:px-0 lg:ml-32">
          <h2 className="my-4 text-3xl font-semibold md:mt-0">{judul}</h2>
          <ul class="list-disc ml-8 text-blue-900">
            <li>Opertarion Weight 70 ton</li>
            <li>Opertarion Weight 70 ton</li>
            <li>Opertarion Weight 70 ton</li>
          </ul>
          <div class="flex flex-col text-blue-900">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <h2 className="text-base font-semibold py-3">GENERAL</h2>
                  <table class="min-w-full text-left text-sm font-light">
                    <tbody>
                      <tr class="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                        <td class="whitespace-nowrap px-6 py-4 font-bold">
                          Operation Weight
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 font-normal">
                          70 ton
                        </td>
                      </tr>
                      <tr class="border-b bg-white dark:border-neutral-500 dark:bg-neutral-700">
                        <td class="whitespace-nowrap px-6 py-4 font-bold">
                          Size
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 font-normal">
                          -
                        </td>
                      </tr>
                      <tr class="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                        <td class="whitespace-nowrap px-6 py-4 font-bold">
                          Emission
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 font-normal">
                          Tier 2
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="overflow-hidden">
                  <h2 className="text-base font-semibold py-3">ENGINE</h2>
                  <table class="min-w-full text-left text-sm font-light">
                    <tbody>
                      <tr class="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                        <td class="whitespace-nowrap px-6 py-4 font-bold">
                          Operation Weight
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 font-normal">
                          70 ton
                        </td>
                      </tr>
                      <tr class="border-b bg-white dark:border-neutral-500 dark:bg-neutral-700">
                        <td class="whitespace-nowrap px-6 py-4 font-bold">
                          Size
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 font-normal">
                          -
                        </td>
                      </tr>
                      <tr class="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                        <td class="whitespace-nowrap px-6 py-4 font-bold">
                          Emission
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 font-normal">
                          Tier 2
                        </td>
                      </tr>
                      <tr class="border-b bg-white dark:border-neutral-500 dark:bg-neutral-700">
                        <td class="whitespace-nowrap px-6 py-4 font-bold">
                          Size
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 font-normal">
                          -
                        </td>
                      </tr>
                      <tr class="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                        <td class="whitespace-nowrap px-6 py-4 font-bold">
                          Emission
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 font-normal">
                          Tier 2
                        </td>
                      </tr>
                      <tr class="border-b bg-white dark:border-neutral-500 dark:bg-neutral-700">
                        <td class="whitespace-nowrap px-6 py-4 font-bold">
                          Size
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 font-normal">
                          -
                        </td>
                      </tr>
                      <tr class="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                        <td class="whitespace-nowrap px-6 py-4 font-bold">
                          Emission
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 font-normal">
                          Tier 2
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>

    // <main className="detail-product">
    //   <h2 className="detail-judul-product">H3200-YC</h2>
    //   <div className="detail-background">
    //     <img
    //       alt="Scania"
    //       src="https://www.scania.com/content/dam/group/about-us/heritage/corporate-milestones/2017-the-xt-range-introduced.jpg.transform/Rend_1200X630/image.jpg"
    //       className="background-image"
    //     ></img>
    //     <div className="overlay"></div>
    //     <div className="content">
    //       <h1>Scania Truck </h1>
    //     </div>
    //   </div>
    //   <div className="detail-wrap-product">
    //     <div className="detail-gambar">
    //       <img src="https://products.unitedtractors.com/wp-content/uploads/2021/04/Mining-Tipper-Heavy-Hauler-Trucks.png" />
    //     </div>

    //     <div className="detail-text">
    //       <h2>Scania H3200-YC</h2>
    //       <ul>
    //         <li>Operatuibg Weight 20 ton.</li>
    //         <li>Rated Power 348hp/2000rpm</li>
    //         <li>
    //           Komitmen kami adalah mengutamakan kepuasan para pelanggan dan
    //           memberikan pelayan yang terbaik yang didukung para teknisi yang
    //           berpengalaman serta menggunakan mesin & peralatan yang lengkap.
    //         </li>
    //       </ul>
    //       <table class="detail-table">
    //         <thead>
    //           <tr>
    //             <th className="judul-table">General</th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           <tr class="col-1">
    //             <td>Operaion Weight</td>
    //             <td>20 ton</td>
    //           </tr>
    //           <tr class="col-2">
    //             <td>Engine Model</td>
    //             <td>YC-3</td>
    //           </tr>
    //           <tr class="col-1">
    //             <td>Operaion Weight</td>
    //             <td>20 ton</td>
    //           </tr>
    //           <tr class="col-2">
    //             <td>Engine Model</td>
    //             <td>YC-3</td>
    //           </tr>
    //           <tr class="col-1">
    //             <td>Operaion Weight</td>
    //             <td>20 ton</td>
    //           </tr>
    //           <tr class="col-2">
    //             <td>Engine Model</td>
    //             <td>YC-3</td>
    //           </tr>
    //           <tr class="col-1">
    //             <td>Operaion Weight</td>
    //             <td>20 ton</td>
    //           </tr>
    //           <tr class="col-2">
    //             <td>Engine Model</td>
    //             <td>YC-3</td>
    //           </tr>
    //         </tbody>
    //       </table>

    //       <table class="detail-table">
    //         <thead>
    //           <tr>
    //             <th className="judul-table">General</th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           <tr class="col-1">
    //             <td>Operaion Weight</td>
    //             <td>20 ton</td>
    //           </tr>
    //           <tr class="col-2">
    //             <td>Engine Model</td>
    //             <td>YC-3</td>
    //           </tr>
    //           <tr class="col-1">
    //             <td>Operaion Weight</td>
    //             <td>20 ton</td>
    //           </tr>
    //           <tr class="col-2">
    //             <td>Engine Model</td>
    //             <td>YC-3</td>
    //           </tr>
    //           <tr class="col-1">
    //             <td>Operaion Weight</td>
    //             <td>20 ton</td>
    //           </tr>
    //           <tr class="col-2">
    //             <td>Engine Model</td>
    //             <td>YC-3</td>
    //           </tr>
    //           <tr class="col-1">
    //             <td>Operaion Weight</td>
    //             <td>20 ton</td>
    //           </tr>
    //           <tr class="col-2">
    //             <td>Engine Model</td>
    //             <td>YC-3</td>
    //           </tr>
    //         </tbody>
    //       </table>
    //     </div>
    //   </div>
    // </main>
  );
};
