import React from "react";
import "../Nav/navbar.css";

export const Navbar = () => {
  // const navigate = useNavigate()
  return (
    <>
      {/* <nav className="navbar-top">
        <div className="navbar-logo">
          <img src="https://www.dpp.co.id/wp-content/uploads/2022/04/dpppppppp.png"></img>
        </div>

      </nav> */}
      <nav className="navbar-bottom">
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
              <a href="/productpatria">Patria</a>
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
            <a href="/news">News</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
