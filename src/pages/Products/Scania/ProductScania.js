import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ProductScania = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const getProduct = async () => {
    try {
      let response = await axios.get("https://fakestoreapi.com/products/");
      // console.log(response.data);
      setProducts(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const data = [{
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {}
    },
    {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "rating": {
    "rate": 4.1,
    "count": 259
    }
    },
    {
    "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "rating": {
    "rate": 4.7,
    "count": 500
    }
    },
    {
    "id": 4,
    "title": "Mens Casual Slim Fit",
    "price": 15.99,
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    "rating": {
    "rate": 2.1,
    "count": 430
    }
    }]

  return (
    <>
    
      <main className="h-full w-full justify-center text-center">
      {/* {products.map((p) => {
            return <p>{p.title}</p>;
          })} */}
        {/* judul  */}

        <div className="text-left sm:pl-14 md:pl-18 lg:pl-20 xl:pl-[100px] 2xl:pl-[200px]">
          <h2 className="text-[34px] sm:text-[44px] font-medium p-4 lg:text-[44px] xl:py-5">
            {data[2].title}
          </h2>
        </div>

        {/* logo atas  */}
        <div className="mt-5 mb-10 mx-auto w-52 sm:w-[300px] md:w-[380px] lg:w-[400px]">
          <img
            src="https://www.carlogos.org/logo/Scania-logo-6200x1800.png"
            className="mx-auto w-full h-full"
            alt="gambar"
          />
        </div>
        <div>
          
        </div>

        {/* card product  */}
        <div className="mx-auto w-full p-3 sm:grid sm:px-10 sm:grid-cols-1 sm:justify-center md:flex md:flex-wrap md:px-0 lg:px-0 ">
          <div
            onClick={() => navigate("/typescania")}
            className="px-4 text-black text-left mb-4 sm:mb-12 md:w-64 lg:w-80 xl:w-96  "
          >
            <img
              src="https://www.uniquip.co.id/wp-content/uploads/2023/01/HYUNDAI-1-768x512.jpg"
              alt="product"
              className="w-full h-full aspect-video bg-cover border border-gray-300 hover:-translate-y-3 hover:duration-300"
            />
            <div className="">
              <div className="text-center text-lg uppercase italic font-light sm:text-lg sm:line-clamp-2 lg:line-clamp-2 lg:text-lg xl:sm:line-clamp-none">
                Dump Truck
              </div>
            </div>
          </div>
          <div
            onClick={() => navigate("/typescania")}
            className="px-4 text-black text-left mb-4 sm:mb-12 md:w-64 lg:w-80 xl:w-96  "
          >
            <img
              src="https://www.uniquip.co.id/wp-content/uploads/2023/01/HYUNDAI-1-768x512.jpg"
              alt="product"
              className="w-full h-full aspect-video bg-cover border border-gray-300 hover:-translate-y-3 hover:duration-300"
            />
            <div className="">
              <div className="text-center text-lg uppercase italic font-light sm:text-lg sm:line-clamp-2 lg:line-clamp-2 lg:text-lg xl:sm:line-clamp-none">
                Dump Truck
              </div>
            </div>
          </div>
          <div
            onClick={() => navigate("/typescania")}
            className="px-4 text-black text-left mb-4 sm:mb-12 md:w-64 lg:w-80 xl:w-96  "
          >
            <img
              src="https://www.uniquip.co.id/wp-content/uploads/2023/01/HYUNDAI-1-768x512.jpg"
              alt="product"
              className="w-full h-full aspect-video bg-cover border border-gray-300 hover:-translate-y-3 hover:duration-300"
            />
            <div className="">
              <div className="text-center text-lg uppercase italic font-light sm:text-lg sm:line-clamp-2 lg:line-clamp-2 lg:text-lg xl:sm:line-clamp-none">
                Dump Truck
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
