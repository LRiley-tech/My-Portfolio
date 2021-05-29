import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="skills-body">
        <head>
          <script src="https://use.fontawesome.com/740dccf130.js"></script>
        </head>
        <footer id="footer">
          <div className="footer--text">
            <p>
              &copy; Leeangelo Riley
            </p>
          </div>

          <p className="last-updated">Last Modified: 7/16/2020</p>

          <div className="footer--socialLinks">
            <a
              className="social"
              href="https://github.com/LeCoding-tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-github fa-2x"></i>
            </a>
            <a
              className="social"
              href="https://www.linkedin.com/in/leeangelo-riley/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-linkedin fa-2x"></i>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
