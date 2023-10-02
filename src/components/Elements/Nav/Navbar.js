import React from "react";
import '../Nav/navbar.css'

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
