import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img2 from "../../assets/images/caro12.png";
import img3 from "../../assets/images/caro13.png";
import img4 from "../../assets/images/caro14.png";
import img5 from "../../assets/images/caro15.png";
import "./swiper.css";

const Carousel = () => {
  const settings = {
    centerMode: true, // Enable center mode
    centerPadding: "0", // Ensure no padding around slides
    dots: true, // Show navigation dots
    infinite: true, // Loop through slides
    speed: 500, // Transition speed
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay delay
    arrows: true, // Show navigation arrows
  };

  const images = [img2, img3, img4, img5];

  return (
    <div className="swiper-head">
      <h1> Essentials made <strong>Amazing</strong></h1>
      <p>For every kind a cool</p>
    <div style={{ width: "80%", margin: "0 auto" }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide-container">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
            />
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default Carousel;
