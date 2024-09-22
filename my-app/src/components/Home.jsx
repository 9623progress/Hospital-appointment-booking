import React from "react";
import Feature from "./feature";

import back from "./images/4855148.jpg";

import "../style/Home.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import testimonials from "../utils/testimonial";
import Footer from "./Footer";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // This will autoplay the slider
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div className="Home-space">
        <div className="Home-front">
          <div>
            <h1>Your Health, Our Priority Book an Appointment Today!</h1>
            <button className="home-book">Book Appointment</button>
          </div>
          <div className="Home-front-img-div">
            <img className="Home-front-img" src={back} alt="" />
          </div>
        </div>

        <div className="shadow p-3 mb-5 bg-body-tertiary rounded mt-5 ">
          <div id="about">
            <div className="d-flex mx-5 feature">
              <div className="feature-choose-button">
                <h1> Why Choose MedStar ?</h1>
                <button
                  type="button"
                  className="btn btn-primary "
                  style={{ background: "#6743a8", border: "2px solid white" }}
                >
                  More Info &rarr;
                </button>
              </div>
              <div>
                <Feature />
              </div>
            </div>
          </div>
        </div>

        <div className="slider-div">
          <div className="slider">
            <h2>What Our Patients Say</h2>
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-slide">
                  <p className="testimonial-text">{testimonial.text}</p>
                  <h5 className="patient-name">- {testimonial.name}</h5>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
