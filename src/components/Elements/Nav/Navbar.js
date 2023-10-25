import React from "react";
import "../Nav/navbar.css";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  // const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

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
    </>
  );
};
