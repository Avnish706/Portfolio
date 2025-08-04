import React from "react";
import { FaBehance, FaDribbble, FaTwitter , FaEnvelope } from "react-icons/fa";
import "./home.css";
import profileImg from "../../assets/my_Photo.jpg";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";
import CV from "../../assets/Updated_avnish_resume.pdf";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__wrapper">
        <div className="home__container container">
          <p className="home__subtitle text-cs">
            Hello, <span>My Name Is</span>
          </p>

          <h1 className="home__title text-cs">
            <span>Avnish</span> Jha
          </h1>

          <p className="home__job">
            <span className="text-cs">I Am</span> <b>Software Developer & IoT Developer</b>
          </p>

          <div className="home__img-wrapper">
            <div className="home__banner">
              <img src={profileImg} alt="" className="home__profile" />
            </div>

            <p className="home__data home__data-one">
              <span className="text-lg">
                1 <b>+</b>
              </span>

              <span className="text-sm text-cs">
                Month of <span>Experience</span>
              </span>
            </p>

            <p className="home__data home__data-two">
              <span className="text-lg">4</span>

              <span className="text-sm text-cs">
                Completed <span>Projects</span>
              </span>
            </p>

            <img src={shapeOne} alt="" className="shape shape__1" />
            <img src={shapeTwo} alt="" className="shape shape__2" />
            <img src={shapeTwo} alt="" className="shape shape__3" />
          </div>

          <p className="home__text">
           Currently I am Pursuing B.Tech In Internet of Things (IoT) From MITS Gwalior, Madhya Pradesh ,India. I have a strong interest in software development and,also I am good
            at internet of things(IoT).
          </p>

          <div className="home__socials">
            <a href="https://www.linkedin.com/in/avnish-jha-b20690254" className="home__social-link">
              <FaLinkedin />
            </a>
            <a href = "https://github.com/Avnish706" className="home__social-link">
              <FaGithub />
            </a>
            <a href="mailto:avnish1111jha@gmail.com" className="home__social-link">
              <FaEnvelope />
            </a>
          </div>

          <div className="home__btns">
            <a download="" href={CV} className="btn text-cs">
              Download CV
            </a>

            <a href="#skills" className="hero__link text-cs">
              My Skills
            </a>
          </div>
        </div>

        <div className="section__deco deco__left">
          <img src={shapeOne} alt="" className="shape" />
        </div>
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__title">Software Developer</span>
      </div>
    </section>
  );
};

export default Home;
