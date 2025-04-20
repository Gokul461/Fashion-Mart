import React from 'react';
import pay1 from '../../assets/images/payslide1.avif';
import pay2 from '../../assets/images/payslide2.avif';
import pay3 from '../../assets/images/payslide3.avif';
import pay4 from '../../assets/images/payslide4.avif';
import './slider.css'; 

const Paymentslider = () => {
  return (
    <div className='container mb-3 menslider my-5 bg-white'>
      <div
        id="paymentCarousel"
        className="carousel slide"
        data-ride="carousel"
        data-interval="1500"
        style={{ maxWidth: '90vw', margin: '0 auto' }}
      >
        {/* Indicators */}
        <ol className="carousel-indicators">
          <li data-target="#paymentCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#paymentCarousel" data-slide-to="1"></li>
          <li data-target="#paymentCarousel" data-slide-to="2"></li>
          <li data-target="#paymentCarousel" data-slide-to="3"></li>
        </ol>

        {/* Slides */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={pay1} alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={pay2} alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={pay3} alt="Slide 3" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={pay4} alt="Slide 4" />
          </div>
        </div>

        {/* Controls */}
        <a
          className="carousel-control-prev"
          href="#paymentCarousel"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#paymentCarousel"
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

export default Paymentslider;
