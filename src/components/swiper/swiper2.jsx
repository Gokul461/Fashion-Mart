import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/images/caro9.png";
import img2 from "../../assets/images/caro2.png";
import img3 from "../../assets/images/caro3.png";
import img4 from "../../assets/images/caro4.png";
import img5 from "../../assets/images/caro5.png";
import img6 from "../../assets/images/caro6.png";
import img7 from "../../assets/images/caro7.png";
import img8 from "../../assets/images/caro8.png";
import "./swiper.css";

const Swiper2 = () => {
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

  const images = [img1,img2, img3, img4, img5,img6,img7,img8];

  return (
    <div className="swiper-head">
      <h1> On Trend <strong>Tracks</strong></h1>
      <p>Explore our promising Line-Up</p>
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

export default Swiper2;
