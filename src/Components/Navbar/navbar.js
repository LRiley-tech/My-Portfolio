import React from "react";
import "./navbar.css";
import Resume from './Resume/Resume.pdf'
const Navbar = () => {
  return (
    <div>
      <header className="header">
        <nav className="header--nav">

          <h2 className="logo">
            Leeangelo Riley
          </h2>
          <ul className="header--nav--ul">
            <li className="header--nav--li">
              <h2>Home</h2>
            </li>
            <li className="header--nav--li">
              <h2>Projects</h2>
            </li>
            <li>
              <a href={Resume} target="_blank" rel="noopener noreferrer"><h2 className="header--nav--li">Resume</h2></a>
            </li>
            <li className="header--nav--li">
              <h2>Contact</h2>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
