import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/logo.png";
import { useState } from "react";
import { FiMenu, FiX,FiChevronDown } from "react-icons/fi";

export const Navbar = () => {
  const navigate = useNavigate();
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [aboutopen,setAboutOpen] = useState(false);

  const handleAboutEnter = () => {
    setAboutOpen(!aboutopen);
  };
  const handleAboutLeave = () => {
    setAboutOpen(aboutopen);
  };

  const [open,setOpen]=useState(false);

  return (
    <>
      <nav className=" fixed w-full top-0 z-40 bg-slate-50 border-gray-200 dark:bg-gray-900 dark:border-gray-700 shadow-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" class="flex items-center">
            <img src={Logo} class="h-16" alt=" Logo" />
          </a>
          <button
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden"
            onClick={()=>setOpen(!open)}
          >
            <div className="text-2xl">{open?<FiX/>:<FiMenu/>}</div>
          </button>
          <div
            className={`relative w-full ${
              open ? "visible" : "hidden"
            }  lg:block flex flex-col font-medium p-4 lg:p-0 mt-4 border-t border-slate-200  bg-slate-50 lg:flex-row lg:w-auto lg:space-x-8 lg:mt-0 md:border-0 md:border-t md:border-slate-200 lg:border-0 md:bg-slate-50`}
          >
            <div className="group inline-block relative" >
              
              <button onMouseEnter={()=>{
                handleAboutEnter()
              }} 

              onMouseLeave={()=>{
                handleAboutLeave()
              }}

              onClick={()=>{
                navigate('/about')
              }}
                
                className="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 lg:p-0 md:w-auto"
              >
                Tentang Kami
                <FiChevronDown className="ml-2 text-xl font-bold "/>
              </button>
              
                <div className= {`${aboutopen?"visible":"hidden"} absolute font-normal bg-white divide-y divide-gray-100 rounded-md shadow w-44`}>
                  <a
                    href="/milestone"
                    class="block px-4 py-2 hover:bg-gray-100"
                  >
                    Milestone & Award
                  </a>
                  <a
                    href="/board"
                    class="block px-4 py-2 hover:bg-gray-100"
                  >
                    Board Of Director
                  </a>
                </div>
            </div>
            <a
              href="/industries"
              class="py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 lg:p-0 "
            >
              Bisnis Kami 
            </a>
            <a
              href="/product"
              class="py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 lg:p-0 "
            >
              Produk Support
            </a>
            <a
              href="/career"
              class="py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 lg:p-0 "
            >
              Karier
            </a>
            <a
              href="/news"
              class="py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 lg:p-0 "
            >
              Berita
            </a>
            <a
              href="programcsr"
              class="py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 lg:p-0"
            >
              Program CSR
            </a>
            <a
              href="/contact"
              class="py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 lg:p-0"
            >
              Kontak
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};