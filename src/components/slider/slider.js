import React from 'react';
import Slider1 from '../../assets/images/sliderimg1.png';
import Slider2 from '../../assets/images/sliderimg2.png';
import Slider3 from '../../assets/images/sliderimg3.png';
import Slider4 from '../../assets/images/sliderimg4.png';
import './slider.css'; // Include your custom CSS

const Slider = () => {
  return (
    <div className='container mb-3'>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
        data-interval="1500" // Adjust slide interval (milliseconds)
      >
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={Slider1} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Slider2} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Slider3} alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Slider4} alt="Fourth slide" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Slider;
