import React from "react";
import { FaArrowRight } from "react-icons/fa";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import "./services.css";

// Temporary mock data (replace with real data or import)
const services = [
  {
    name: "DigiMonk Technologies,Gwalior (M.P.)",
    title: "Full Stack web Developer Intern (on-site)",
    description: "Building responsive, high-performance web applications with React, Python and FastApi."
  },
  {
    name: "Uniconvergence Technologies,Noida (U.P.)",
    title: "Full Stack Developer Intern (Remote)",
    description: "Building responsive, high-performance web applications with React, HTML, CSS, and JavaScript."
  },
  {
    name: "MITS GWALIOR (M.P.)",
    title: "summer Internship Program (SIP)",
    description: "Understanding the concept of Data Science and its applications and gain knowledge about Soft Skills."
  },
];

const Services = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title text-cs">What I Do </h2>
      <p className="section__subtitle">
        My <span>Experience</span>
      </p>

      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="services__container container mySwiper">
        {services.map(({ name, title, description }, index) => {
          return (
            <SwiperSlide className="services__item card card-one" key={index}>
              <span className="services__subtitle text-cs">{name}</span>
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>

              <a href="#pricing" className="link">
                {/*See Project*/}
               {/* <FaArrowRight className="link__icon" /> */}
              </a>

              <img src={shapeTwo} alt="" className="shape c__shape" />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="section__deco deco__right">
        <img src={shapeOne} alt="" className="shape" />
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__title">Experience</span>
      </div>
    </section>
  );
};

export default Services;

