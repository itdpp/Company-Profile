import React from "react";
import './style.css'

export const Navbar = () => {
  // const navigate = useNavigate()
  return (
    <>
      <nav className="navbar-top">
        <div className="navbar-logo">
          <img src="https://www.dpp.co.id/wp-content/uploads/2022/04/dpppppppp.png"></img>
        </div>

      </nav>
      <nav className="navbar-bottom">
        <div className="navbar-logo">
          {/* <span>Logo</span> */}
        </div>
        <ul className="navbar-links">
          <li className="dropdown">
            <a href="/">About</a>
            <div className="dropdown-content">
              <a href="/Values">Values</a>
              <a href="#">Vision & Mission</a>
              <a href="#">Tagline</a>
              <a href="#">Milestone & Awards</a>
              <a href="#">Board of director</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="/product">Products</a>
            <div className="dropdown-content">
              <a href="/productscania">Scania</a>
              <a href="#">Mercedes</a>
              <a href="#">Patria</a>
            </div>
          </li>
          <li>
            <a href="#">Industries</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
