import React from "react";
import { FaBehance, FaDribbble, FaGithub, FaLinkedin, FaTwitter  , FaEnvelope} from "react-icons/fa";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/avnish-jha-b20690254" className="footer__social-link">
            <FaLinkedin />
          </a>

          <a href="https://github.com/Avnish706" className="footer__social-link">
            <FaGithub />
          </a>

          <a href="mailto:avnish1111jha@gmail.com" className="home__social-link">
            <FaEnvelope />
          </a>
        </div>

        <p className="footer__copyright text-cs">
          &copy; 2025 <span>Avnish</span>. All rights Reserved
        </p>

        <p className="footer__copyright text-cs">
          Developed by <span>Avnish Jha</span>{" "}
        </p>
      </div>
    </footer>
  );
};
