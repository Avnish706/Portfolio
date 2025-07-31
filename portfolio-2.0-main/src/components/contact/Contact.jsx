import React, { useState } from "react";
import {
  FaRegAddressBook,
  FaRegEnvelope,
  FaRegMap,
  FaRegUser,
} from "react-icons/fa";
import shapeOne from "../../assets/shape-1.png";
import "./contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mkgzzzrz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("SUCCESS");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title text-cs">Contact Me</h2>
      <p className="section__subtitle">
        Let's <span>Connect</span>
      </p>

      <div className="contact__container container grid">
        <div className="contact__content">
          <div className="contact__card">
            <span className="contact__card-icon"><FaRegMap /></span>
            <h3 className="contact__card-title">Address</h3>
            <p className="contact__card-data">Bhagwati Colony Singhpur Road Morar Gwalior(M.P.),India</p>
          </div>
          <div className="contact__card">
            <span className="contact__card-icon"><FaRegUser /></span>
            <h3 className="contact__card-title">Roles</h3>
            <p className="contact__card-data">Software Developer & IoT Developer</p>
          </div>
          <div className="contact__card">
            <span className="contact__card-icon"><FaRegEnvelope /></span>
            <h3 className="contact__card-title">Email</h3>
            <p className="contact__card-data">avnish1111jha@gmail.com</p>
          </div>
          <div className="contact__card">
            <span className="contact__card-icon"><FaRegAddressBook /></span>
            <h3 className="contact__card-title">Phone</h3>
            <p className="contact__card-data">+91-7067515305</p>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__form-group grid">
            <div className="contact__form-div">
              <label className="contact__form-tag text-cs">Your full name <b>*</b></label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={form.name}
                className="contact__form-input"
                required
              />
            </div>
            <div className="contact__form-div">
              <label className="contact__form-tag text-cs">Your Email Address <b>*</b></label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={form.email}
                className="contact__form-input"
                required
              />
            </div>
          </div>

          <div className="contact__form-div">
            <label className="contact__form-tag text-cs">Your Subject <b>*</b></label>
            <input
              type="text"
              name="subject"
              onChange={handleChange}
              value={form.subject}
              className="contact__form-input"
              required
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <label className="contact__form-tag text-cs">Your Message <b>*</b></label>
            <textarea
              name="message"
              onChange={handleChange}
              value={form.message}
              className="contact__form-input"
              required
            ></textarea>
          </div>

          <div className="contact__submit">
            <p>* Accept the terms and conditions.</p>
            <button type="submit" className="btn text-cs">Send Message</button>
            {status === "SUCCESS" && <p className="success">Message sent successfully!</p>}
            {status === "ERROR" && <p className="error">There was an error sending your message.</p>}
          </div>
        </form>
      </div>

      <div className="section__deco deco__left">
        <img src={shapeOne} alt="" className="shape" />
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__title">Contact Me</span>
      </div>
    </section>
  );
};

export default Contact;

