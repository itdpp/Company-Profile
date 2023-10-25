import React from "react";
import "../Nav/navbar.css";
<<<<<<< HEAD
// import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  // const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

=======
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/logo.png";
import { useState } from "react";

export const Navbar = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

>>>>>>> b8392dcceed2bec1f3be65b1c9105817aa589a8f
  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

<<<<<<< HEAD
  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };
  
  return (
    <>
      {/* <nav className="navbar-top">
        <div className="navbar-logo">
          <img src="https://www.dpp.co.id/wp-content/uploads/2022/04/dpppppppp.png"></img>
        </div>

      </nav> */}
      {/* <nav className="navbar-bottom">
        <div className="navbar-logo">
          <img src="https://www.dpp.co.id/wp-content/uploads/2022/04/dpppppppp.png"></img>
        </div>
        <ul className="navbar-links">
          <li className="dropdown">
            <a href="/">About</a>
            <div className="dropdown-content">
              <a href="/values">Values</a>
              <a href="/vision">Vision & Mission</a>
              <a href="tagline">Tagline</a>
              <a href="awards">Milestone & Awards</a>
              <a href="board">Board of director</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="/product">Products</a>
            <div className="dropdown-content">
              <a href="/productscania">Scania</a>
              <a href="/">Patria</a>
              <a href="#">Mercedes</a>
            </div>
          </li>
          <li>
            <a href="/industries">Industries</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/ournetwork">Our Network</a>
          </li>
          <li>
            <a href="/career">Career</a>
          </li>
          <li>
            <a href="/news">News</a>
          </li>
        </ul>
      </nav> */}
        <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-semibold">My Website</div>
        <div className="space-x-4 relative">
          <a href="/" className="text-white hover:text-gray-300">Home</a>
          <a href="/about" className="text-white hover:text-gray-300">About</a>
          <div
            className="group inline-block relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="text-white hover:text-gray-300 focus:outline-none">
              Dropdown
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-2 space-y-2 bg-gray-800 text-white p-2 rounded-lg">
                <button className="block hover:text-gray-300" onClick={() => alert('Profile clicked')}>
                  Profile
                </button>
                <button className="block hover:text-gray-300" onClick={() => alert('Settings clicked')}>
                  Settings
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
=======

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <>
      <nav className=" bg-slate-50 border-gray-200 dark:bg-gray-900 dark:border-gray-700 shadow-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" class="flex items-center">
            <img src={Logo} class="h-16" alt=" Logo" />
          </a>
          <button
            id="navbar-toggle"
            data-collapse-toggle="navbar-dropdown"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
            onClick={toggleDropdown}
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`relative w-full ${
              isDropdownOpen ? "visible" : "hidden"
            } lg:block md:w-auto flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-slate-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-slate-50`}
          >
            <a
              href="/"
              className=" py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
            >
              About
            </a>
            <div
              className="group inline-block relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={()=>navigate('/product')}
                className="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
              >
                Products
                <svg
                  class="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute font-normal bg-white divide-y divide-gray-100 rounded-md shadow w-44">
                  <a href="/productscania" class="block px-4 py-2 hover:bg-gray-100">
                    Scania
                  </a>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 hover:rounded-b-lg"
                  >
                    Patria
                  </a>
                </div>
              )}
            </div>
            <a
              href="/industries"
              class="py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Industries
            </a>
            <a
              href="/contact"
              class="py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Contact
            </a>
            <a
              href="/ournetwork"
              class="py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Our Network
            </a>
            <a
              href="/career"
              class="py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Career
            </a>
            <a
              href="/news"
              class="py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              News
            </a>
          </div>
        </div>
      </nav>
>>>>>>> b8392dcceed2bec1f3be65b1c9105817aa589a8f
    </>
  );
};
